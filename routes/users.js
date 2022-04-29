const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult, check } = require('express-validator');


const User = require('../models/User');


//@route post   POST api/users
//@desc         Register a user
//@access       public


//input 
router.post('/', [

    //input validator and checks
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
],
async (req, res) => {
    //validation conditions
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {name, email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({msg: 'user already exists'})
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSaltSync(10);

        // const hashedPassword = await bcrypt.hash(password, salt);
        // user.paswsword = hashedPassword;

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token)=> {
            if (err) throw err;
            res.json({token})
        })

    } catch (err) {
        console.log(err.message);
        res.send(err.message)
        res.status(500).send('Server Errorrrr')
    };
});

module.exports = router;