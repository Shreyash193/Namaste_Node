const http=require("http");

const server=http.createServer(function(req,res){
    if(req.url === "/getSecretdata"){
        res.end("There is no secret data");
    }
    else{
        res.end("Hello World");
    }
   
});

server.listen(7777);