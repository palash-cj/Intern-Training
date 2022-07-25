const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : [3, 'Name should be 3 letters long']
    },
    age : {
        type : Number,
        required : true,
        validate(value){
            if(value<0){
                throw new Error('Age cant be negetive');
            }
        }
    },
    city : {
        type : String,
        required : true,
        minlength : [3, 'City name should be 3 letters long']
    },
    email :{
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    password :{
        type : String,
        required : true,
        minlength : [4, 'Name should be 4 letters long']
    },
    tokens:[{
        token:{
            required:true,
            type: String
        }
    }]
})

schema.methods.generateJWT = async function(){
    try {
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY); // generatingthe token
        console.log('model');
        
        this.tokens=this.tokens.concat({token:token}); // storing the token 
        
        return token;
    } catch (error) {
        res.send(`error part : ${error}`);
        console.log(`Error occured : ${error}`);
    }
}

// Encrypting th password
schema.pre('save', async function(next){
    if(this.isModified("password")){
        console.log(this.password);
        this.password= await bcrypt.hash(this.password,10);
        console.log(this.password);
    }
    next();
})


// Create collection 
const Register = new mongoose.model("register", schema);

module.exports=Register;
