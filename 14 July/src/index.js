const express = require('express');
const app = express();
require('./db/db')

const Entry = require('./models/model')

const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/',(req,res)=>{
    const fun = async ()=>{
        try{
            const result = await Entry.find().select({name :1});
            res.send(result);
        }catch{(err)=>{
            res.send(err);
        }};
    }
    fun();
})
app.post('/post',(req,res)=>{
    console.log(req.body);

    const user = new Entry(req.body);
    user.save()
    .then(()=>{
        res.send(user);
    })
    .catch((err)=>{
        res.send(err);
    })
    
})
app.put('/patch',(req,res)=>{
    Entry.updateOne({name:"Sweety Sharma"},{city:"Nagpur"})
    .then(()=>{
        res.send("Document Updated Successfully");
    })
    .catch((e)=>{
        console.log(e);
    })
})
app.delete('/delete',(req,res)=>{
    Entry.deleteOne({name:req.body.name})
    .then(()=>{
        res.send("Document deleted successfully");
    }).catch((err)=>{
        res.send(err);
    })
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})