// Events module with multiple callbacks

const EventEmitter = require('events');

const event = new EventEmitter();

event.on("myPage", ()=>{
    console.log("Welcome to Event module learnings");
})

event.on("myPage", ()=>{
    console.log("Welcome to Event module learnings 1");
})

event.on("myPage", ()=>{
    console.log("Welcome to Event module learnings 2");
})

event.emit("myPage");