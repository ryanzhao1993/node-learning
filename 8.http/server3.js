var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
    if(req.url == '/') {
        resp.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./index.html', function(error, data) {
            console.log(data);
            resp.end(data);
        });
    }
});

server.listen(8888, 'localhost');