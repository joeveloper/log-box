const { check, validationResult  } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

const auth = require('../middleware/auth');




//file contains all the actions that can be performed on the contacts 

const express = require('express');

const router = express.Router();

//@route    GET api/contacts
//@desc     Get all users contact
//@access   private

router.get('/', auth, async (req, res) => {

try {
    const contacts = await Contact.find({user: req.user.id}).sort({date: -1})
    res.json(contacts)
} catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
}
});

//@route    POST api/contacts
//@desc     Add a new contact
//@access   private

router.post('/', 
    [
        auth, 
    [
    check('name', 'Name is required')
    .not()
    .isEmpty()
    ]   
    ], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const {name, email, phone} = req.body;

    try {
        const newContact = new Contact({
            name,
            email, 
            phone, 
            type,
            user: req.user.id
        });
        const contact = await newContact.save();  
        console,log('new contact created');
    }
    catch (err) {
        console.error(err.message)
    }

});

//@route    PUT api/contacts/:id
//@desc     Update a contact
//@access   private

router.put('/:id', auth, async (req, res) => {
    const {name, email, phone, type} = req.body;

    //Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id)

        if(!contact) return res.status(404).json({msg: 'Contact not found'});
        //Make sure only user can access contacts

        if(contact.user.toString() !== req.user.id) 
            return res.status(401).json({msg: 'User not authorized'});

//set the value of contactFields as new value of user 
        contact = await Contact.findByIdAndUpdate(req.params.id, 
            {$set: contactFields},
            {new: true});
    } catch (err) {
        console.log(err.message);
    res.status(500).send('Server Error');
    }

});

//@route    DELETE api/contacts/:id
//@desc     Delete contact
//@access   private

router.delete('/:id', async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id)

        if(!contact) return res.status(404).json({msg: 'Contact not found'});
        //Make sure only user can access contacts

        if(contact.user.toString() !== req.user.id) 
            return res.status(401).json({msg: 'User not authorized'});

        await Contact.findByIdAndRemove(req.params.id);
        res.json({msg: 'cotact removed'})
        
    } catch (err) {
        console.log(err.message);
    res.status(500).send('Server Error');
    }
});

module.exports = router;