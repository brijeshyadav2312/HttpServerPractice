const http = require("node:http");

const server = http.createServer((req,res) =>{
    console.log(req.url)
    console.log(req.method)
    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("hello world");
        res.end();
        return;
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.write("404")
        res.end();
        return;
    }
});

server.listen(3000,() =>{
    console.log("server start on url http://localhost:3000");
})