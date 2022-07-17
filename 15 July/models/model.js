const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        required :true,
        type : String,
        minlength : [3, "Name should be atleast 3 letters long"]
    },
    age : {
        type : Number,
        required : true,
        validate(value){
            if (value<0){
                throw new Error("Age can't be negetive");
            }
        }
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log('Invalid Email');
                alert('Invalid Email');
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : [8,"Password must have 8 characters"]
    },
    tokens:[{
        token:{
            required:true,
            type: String
        }
    }]
})


// Generating json web token
userSchema.methods.generateJWT = async function(){
    try {
        
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY); // generatingthe token
        
        this.tokens=this.tokens.concat({token:token}); // storing the token 
        
        return token;
    } catch (error) {
        res.send(`error part : ${error}`);
        console.log(`Error occured : ${error}`);
    }
}

userSchema.pre('save', async function(next){
    if(this.isModified("password")){
        console.log(this.password);
        this.password= await bcrypt.hash(this.password,10);
        console.log(this.password);
    }
    next();
})

const User = new mongoose.model("User",userSchema);

module.exports=User;