// Template engines are used ot serve dynamic pages in express js
// hbs,ejs,pug are the different types of template engine
// In the below snippets, we have used 'hbs'
// Views folder is neccesary to access dynamic pages

// Partials are used to require common code snippets like navigation bar throughout the project

// Adding 404 error files

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');  // requiring template engine

const file = path.join(__dirname, "../12 July/templates/views");  // providing the path of templates directory
const file1 = path.join(__dirname, "../12 July/templates/partials");  // providing the path of templates directory

app.set("view engine", "hbs");// using template engine
app.set("views",file);// changing the name of views->templates
hbs.registerPartials(file1);// Using partials 


app.get('/',(req,res)=>{
    res.render("index",{
        dummy : "palash" // dynamic response
    });
})
app.get('/',(req,res)=>{
    res.end("Hello from the home page");
})
app.get('*',(req,res)=>{
    res.render("404"
    // ,{
    //     errorcomment : "This page could not be found",
    // }
    )
})

app.listen(4000, ()=>{
    console.log(`Listening to the port 4000...`);
})