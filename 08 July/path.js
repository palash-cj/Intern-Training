// Path modules in node.js

const path=require('path');
console.log(path.dirname("/home/palash/temporary/Intern-Training/08 July/path.js"));// gives the dirctory of particular file
console.log(path.extname("/home/palash/temporary/Intern-Training/08 July/path.js"));// gives the extnsion of provided file 
console.log(path.basename("/home/palash/temporary/Intern-Training/08 July/path.js"));// gives the base nam of provided file

const temp =path.parse("/home/palash/temporary/Intern-Training/08 July/path.js");// gives the properties of file
console.log(temp.name);
console.log(temp.ext);
console.log(temp.dir);