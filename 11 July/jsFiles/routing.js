const express = require('express');
const app = express();
const port = 5001;

app.get('/about',(req,res)=>{
    res.send("About Us page");
})

app.get('/contact',(req,res)=>{
    res.status(200).send("Contact Us page");// status code 200 for 'OK'
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`);
})
