// Working with dynamic API requests

const express = require('express');
const app = express();
const requests = require('requests');

app.get('/about',(req,res)=>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=e0e6031c330e5e8e8a66c28abaf7769a`)

        .on('data', (chunk) => {  // data is accessed as part of streams
            const objdata = JSON.parse(chunk);  // converting json to object
            const arrayData = [objdata];
            console.log(`City is ${arrayData[0].name} and temp is ${arrayData[0].main.temp}`)

            res.write(arrayData[0].name);
            res.end();
        })
        .on('end', (err) => {
          if (err) return console.log('connection closed due to errors', err);
         
         res.end();
        });
})

app.listen(3000, ()=>{
    console.log(`Listening to the post 3000...`)
})