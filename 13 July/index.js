// Implementing mongooese

// -> Mongoose is a bridge between mongodb and node server
// -> We can create connection between mongo and server
// -> To start using install mongoose package using npm i mongoose
// -> follow the given snippet to get the implementation 


const mongoose=require("mongoose");// requiring mongoose package

mongoose.connect('mongodb://localhost:27017/player')// step of connecting server to database
.then(()=>console.log(`Connected to database successfully...`))// handleing the promises
.catch((err)=>{`${err}`})

// creating the mongoose.Schema

const dataSchema = new mongoose.Schema({
    name : String,
    age : Number,
    DOB : Date,
    city : String
})

// creating Model 
const Entry = mongoose.model("Entry", dataSchema);

const doc = async ()=>{
    try{
        const cricket = new Entry({
            name : "Ansh",
            age : 18,
            city : "Nagpur"
        });
        const football = new Entry({
            name : "Daksh",
            age : 15,
            city : "Nagpur"
        });
        const badminton = new Entry({
            name : "Arya",
            age : 14,
            city : "Nagpur"
        });
        const tennis = new Entry({
            name : "Arohi",
            age : 4,
            city : "Nagpur"
        });
        const chess = new Entry({
            name : "Veda",
            age : 1,
            city : "Nagpur"
        });

        // const save = await football.save();//storing 1 document
        const save = await Entry.insertMany([cricket,football,badminton,tennis,chess]);
        console.log(`Document saved successfully! \n ${save}`)
    }catch(err){
        console.log(err);
    }
    
}

// Saving the data inside the collection
// doc()

// reading the document from database
const getDocument = async ()=>{
    const result = await Entry.find().select({_id : 0,name:1});// using mongodb queries
    console.log(result);
}

getDocument();