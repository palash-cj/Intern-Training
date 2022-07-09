//Simple API in Node.js

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("Hello from the other side");
    }else if(req.url=='/about'){
        res.end("Hello from the AboutUS side");
    }else if(req.url=='/contact'){
        res.end("Hello from the contact us side");
    }else if(req.url=='/data'){
        const result=fs.readFile("data.json","utf-8",(err,data)=>{//API is ftching the data from data.json file
            res.end(data);
        })
    }
    else{
        res.writeHead(404,{"Content-Type" : "html/text"});
        res.end("404 Error")
    }
})


server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening the server")
})
