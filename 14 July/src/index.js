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
app.put('/patch',async (req,res)=>{
    try {
        const result1 = await Entry.findByIdAndUpdate({_id:req.body._id},{
            city : "Mumbai"
        },
        {
            new:true // this line returns the updated data 
        })
        res.send(result1);
    } catch (error) {
        res.send('Some error occured')
    }

})
app.delete('/delete',async (req,res)=>{
    try {
        const result = await Entry.findByIdAndDelete({_id:req.body._id});
        res.send(result);
        console.log('Deleted');
    } catch (error) {
        res.send("Some error occured")
    }
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})