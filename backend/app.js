const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


const cors = require('cors');  app.use(cors());

dotenv.config({path: './config.env'});
require('./db/conn');
//const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT; 

//Middleware
// const middleWare = (res, req, next) => {
//     console.log('Hello this is my middleware');
//     next();
// }

// app.get('/', (req, res) => {
//     res.send(`Hello World from the Server in app.js`);
// })
// app.get('/about', (req, res) => {
//     res.send(`This is about my project`);
// })
app.get('/contact', (req, res) => {
    res.send(`Feel free to contact me if needed`);
})
app.get('/login', (req, res) => {
    res.send(`This is LOGIN Page`);
})
app.get('/signup', (req, res) => {
    res.send(`This is SIGNUP Page`);
})
app.listen(PORT, () =>{
    console.log(`Server is Running at port ${PORT}`)
})