const http = require('http')

http.createServer(function(req, res){
    res.end("Serve is working")
}).listen(8080)