const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB()

app.get('/', (req, res) => 
    // res.send('Successfully connected');
    res.json({
        msg: "welcome to the log box api"
    }))

    //Define routes 

    app.use('/api/users', require('./routes/users'));
    app.use('/api/contacts', require('./routes/contacts'));
    app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})