const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB()

//initialise middleware

app.use(express.json({extended: false}));

app.get('/', (req, res, next) => {
    return res.json({
        msg: "Welcome to the log api"
    })
})
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));
    //Define routes 

    

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})