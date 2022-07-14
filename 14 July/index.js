// This file inscludes the implementation of crud operation using mongoose

// Validations in mongoose is also implemented here
// -> Built In validations like minlength,maxlength,unique,required
// -> Custom validations
// -> NPM validations


const mongoose = require('mongoose');
const validator = require('validator'); // importing npm validator



const connection = new mongoose.connect(`mongodb://localhost:27017/company`)
.then(()=> console.log(`Connected...`))
.catch((err)=>{
    console.log(err)
})

const employee = mongoose.Schema({
    name :  {
        required : true,
        type : String,
        minlength :3,  // usage of built in validator 
        uppercase : true  // usage of built in validator
    },
    age : {
        required : true,
        type : Number,
        validator(value){// usage of custom validation to validate the age
            if(value<0){
                throw new Error("Age can't be negetive");
            }
        }
    },
    city : String,
    contact : {
        type : String,
        unique : true,
        required : true,
        validate(value){// usage of npm validator to validate the phone number
            if(!validator.isMobilePhone(value)){
                throw new Error("Insert valid phone no...")
            }
        }
    }
})

const Entry = new mongoose.model("Entry", employee);

const doc = async ()=>{
    try{
        const domain= new Entry({
            name : "Arshdeep Singh",
            age : 20,
            city : "Chandigarh",
            contact : 1234567890
        })
        const result = await domain.save();
        console.log(result);

    }
    catch(err){
        console.log(err);
    }
}
doc();

const getDocument = async ()=>{
    const res = await Entry
    .find({city : {$in : "Nagpur"}})
    // .count()  // return s the count of the document
    // .sort({name :1}) // sorts the name ascendingly
    // .sort({name : -1}); // sorts the name in descending order
    console.log(res);
}
// getDocument();



// Updating the document
const updateDoc = async (id)=>{
    try{
        const res = await Entry.findByIdAndUpdate({_id:id},{
            city : "Mumbai"
        },
        {
            new:true // this line returns the updated data 
        })
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}
// updateDoc("62cfa74216924ccf922e92b6");


// Deleting the document
const deleteDoc = async (id)=>{
    try{
        const res = await Entry.deleteOne({_id:id});
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

// deleteDoc("62cfa74216924ccf922e92b6");
