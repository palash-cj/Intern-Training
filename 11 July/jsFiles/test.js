// Send html,JSON data in node js as a response to api

const express = require('express');
const app = express();
const port = 5001;

app.get('/html',(req,res)=>{
    res.send('<h1>Hello</h1>');//send html data
})

app.get('/json',(req,res)=>{// send json data  
    res.json({
        id : 1,
        name : "palash"
    })
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`);
})