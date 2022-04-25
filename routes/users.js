const express = require('express');

const router = express.Router();


//@route post   POST api/users
//@desc         Register a user
//@access       public

router.post('/', (req, res) => {
    res.send("registers a new user");
});

module.exports = router;