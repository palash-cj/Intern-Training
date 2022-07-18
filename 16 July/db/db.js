const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/company')
.then(()=>{
    console.log('Connected to database!')
}).catch(()=>{
    console.log('Error while connecting to the database');
})