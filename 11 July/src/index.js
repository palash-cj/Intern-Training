const express = require('express');
const app = express();
const path = require("path");

console.log(path.join(__dirname, "../public"));// Move from one directory to another
const statisPath=path.join(__dirname, "../public");
app.use(express.static(statisPath));// Middle ware to serve html files to api


// Routing in express js
app.get('/', (req,res)=>{ // GET method 
    res.end("Hello world");
})

app.get('/about',(req,res)=>{
    res.send('Hello from about us page');
})

app.listen(5000, ()=>{
    console.log('Listening the port 5000...')
})