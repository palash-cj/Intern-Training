const mongoose = require("mongoose");
const validator = require('validator');

const entry = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : [3, "name must be 3 letters long"]
    },
    age : {
        type : Number,
        required : true,
        validate(value){
            if(value<0){
                throw new Error("Age cant be negetive");
            }
        }
    },
    city : {
        required : true,
        type : String
    },
    Phone_No : {
        required : true,
        type : String,
        unique : true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error("Insert valid Phone No");
            }
        }
    }
})


// Create collection
const Employee = new mongoose.model("Employee",entry);

module.exports=Employee;