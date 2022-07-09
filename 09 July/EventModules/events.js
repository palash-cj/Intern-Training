// Event module in Node.js

// -> We can create our own events using this module

const EventEmitter = require('events');

const event = new EventEmitter();

event.on("myPage", ()=>{
    console.log("Welcome to Event module learnings");
})

event.emit("myPage");

