//  FS modules using async methods

// Async function executes the line of code first which requires less time

const fs = require('fs');
// fs.writeFile("abc.txt","Sync vs Async", ()=>{
//     console.log("file created!")
// });

// console.log("Hello");

// Int he above snippet, hello will be displayed first then file created.

fs.readFile("abc.txt",'utf-8', (err,data)=>{
    console.log(data);
});
console.log("hello");

// Int he above snippet, hello will be displayed first then data.
