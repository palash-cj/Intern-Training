// Node.js Web Server

// HTTP server

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("Hello from the other side");
    }else if(req.url=='/about'){
        res.end("Hello from the AboutUS side");
    }else if(req.url=='/contact'){
        res.end("Hello from the contact us side");
    }else{
        res.writeHead(404,{"Content-Type" : "html/text"});
        res.end("404 Error")
    }
})


server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening the server")
})