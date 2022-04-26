//file contains all the actions that can be performed on the contacts 

const express = require('express');

const router = express.Router();

//@route    GET api/contacts
//@desc     Get all users contact
//@access   private

router.get('/', (req, res) => {
    res.send("Get all contacts");
});

//@route    POST api/contacts
//@desc     Add a new contact
//@access   private

router.post('/', (req, res) => {
    res.send("Add contact");
});

//@route    PUT api/contacts/:id
//@desc     Update a contact
//@access   private

router.put('/:id', (req, res) => {
    res.send("Edit contact");
});

//@route    DELETE api/contacts/:id
//@desc     Delete contact
//@access   private

router.delete('/:id', (req, res) => {
    res.send("Delete contact");
});

module.exports = router;