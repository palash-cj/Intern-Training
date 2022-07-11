// Express routing in node.js

// Express is a node.js framework to create simple apis
// Is is most widely used js framework to work with backend functionalities

// Install npm pakage first "nom init"
// Install express framework by "npm i express"

// Require express pakage
const express = require('express');
const app = express();


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