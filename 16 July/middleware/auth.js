// this file is created to authenticate the user
// before actually getting the confidential files router will check for the tokens and identify the user 

const jwt=require('jsonwebtoken');
const Register = require('../models/model')

const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;// capturing the cookies
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);// verifying th user
        console.log(verifyUser);

        const user = await Register.findOne({_id:verifyUser._id});// actually gathering the document from the datavase fir the existing user
        // console.log(user);


        req.user=user;
        req.token=token;
        next();
    } catch (error) {
        res.send(`Error occurred ${error}`);
    }
}
module.exports = auth;