// Event Modules with arguments

const EventEmitter = require('events');

const event = new EventEmitter();

event.on("myPage", (statusCode, msg)=>{
    console.log("Welcome to Event module learnings with staus code "+statusCode+" & running status as "+ msg );
})

event.emit("myPage", 200, 'ok');//agguments are pssed on events