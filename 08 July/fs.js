// FS Modules In Node.js

// -> Is is one of the CORE modules of Node.js
// -> 1.  We can create a new file in our folder
// -> 2.  We can overwrite the data inside any file
// -> 3.  We can rename the file 
// -> 4.  We can appnd the data inside any file

// Before actually using the module we need to ruire it in the code
const fs = require('fs');

// Creating th new file and insert the data into it
// fs.writeFileSync("read.txt", "hello welcome to India");

// to overwrite the file created in the above command
// fs.writeFileSync("read.txt", "Hi Agustya!");

// to add new data to an existing file
// fs.appendFileSync("read.txt", " Welcome To Bharat.");

// to read the data present in any file 
// const data = fs.readFileSync("read.txt"); //this will give me buffer data
// console.log(data);// <Buffer 48 69 20 41 67 75 73 74 79 61 21 57 65 6c 63 6f 6d 65 20 54 6f 20 42 68 61 72 61 74>

// to convert that buffer data to original one
// const original_data=data.toString();
// console.log(original_data);

// to rename the file name
fs.renameSync("read.txt","new.txt");