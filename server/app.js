const dotenv = require('dotenv')


const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({path: './config.env'})
require('./db/conn')
app.use(express.json())
app.use(require('./Router/auth'))

const PORT = process.env.PORT;




const middleware = (req,res,next) =>{
    console.log("Hellow middleware");
    next();
}
app.get('/',(req,res)=>{
res.send(`Hello world from the server`)
});


app.get('/aboutme',middleware ,(req,res)=>{
res.send(`Hello world about me page the server`)
});
app.get('/signin',(req,res)=>{
res.send(`Hello world from login page the server`)
});
app.get('/register',(req,res)=>{
res.send(`Hello world from Registration page the server`)
});
app.get('/feedback',(req,res)=>{
res.send(`Hello world from the feedback page server`)
});
app.get('/answer',(req,res)=>{
res.send(`Hello world from the answer page server`)
});
app.listen(PORT,()=>{
    console.log(`server is running at the port no ${PORT}`)
})
