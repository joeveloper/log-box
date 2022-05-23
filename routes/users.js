const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult  } = require('express-validator');

const User = require('../models/User');


//@route post   POST api/users
//@desc         Register a user
//@access       public


//input 
router.post('/', [

    //input validator and checks
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 4})
],
async  (req, res) => {
    //validation conditions
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {name, email, password} = req.body;

    try {
        //test to see if user exist using email check
        let user = await User.findOne({email});
        if (user) {  
            return res.status(400).json({msg: 'user already exists'})
        }

        //encrypt password to 10 character encryption
        const salt = await bcrypt.genSalt(10);

        hashedPassword = await bcrypt.hash(password, salt);

        // if user does not exist, proceed to create a new user
        user = new User({
            name,
            email,
            password: hashedPassword
        });

        // finally save user
        await user.save();
        
        const payload = {
            user: {
                id: user.id
            }
        }
        
        //send sign in token to user
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            res.json({token})
        })

    } catch (err) {
        console.log(err.message)
        res.status(500).send(err.message)
    };
});
 
module.exports = router;