const http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Hello Heroku, How are you');
    res.end();
});
server.listen(3000);