// Json in Node.js

const biodata = {
    name : "palash",
    lname : "jemi",
    age : 21,
    city : "Amravati"
}

const jsonData = JSON.stringify(biodata);// JSON.stringify() is uesd to convert object to json format
console.log(jsonData);

const data = JSON.parse(jsonData); // JSON.parse() is used to convert json format to object
console.log(data);