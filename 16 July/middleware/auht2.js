require('dotenv').config();
const jwt = require('jsonwebtoken');
const hbs=require('hbs');
const express = require('express');
const app = express();

app.set("view engine", "hbs");// used for res.render methods


const auth2 = async(req,res,next)=>{
    try {
        if(req.cookie.jwt){
            const token =req.cookie.jwt;
            const verifyUse = jwt.verify(token, process.env.SECRET_KEY)
            res.status(200).render("index");
        }else{
            next();
        }
        
    } catch (error) {
        next();    
    }
}

module.exports=auth2;