require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
require('./db/db')

const User = require('./models/model');

const port = process.env.PORT;

app.use(express.json());

app.post('/post',async (req,res)=>{
    try{

        const user = new User(req.body);
        console.log(`Success part : ${user}`)

        const tokens = await user.generateJWT(); // method for generating the token

        const registered = await user.save();  // method for saving the data posted
        res.send(registered);
    }catch(e){
        res.send(e);
        console.log('Error part')
    }
    
}) 

app.post('/login',async(req,res)=>{
   try{
        const email=req.body.email;
        console.log(email);
        const password = req.body.password;
        console.log(password);

        const result = await User.findOne({email:email});

        const isMatch = await bcrypt.compare(password, result.password);

        const tokens = await result.generateJWT();
        console.log(tokens);

        if(isMatch){
            res.send("login successful")
        }else{
            res.end("Invalid Credentials")
        }
    
   }catch(e){
       res.status(400).send("Invalid Login details");
   }
    
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}...`);
})