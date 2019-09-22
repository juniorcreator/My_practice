var http = require('http');

var server = new http.Server;

server.listen(80, '127.0.0.1'); // localhost

var counter = 0;

server.on('request', function (req, res) {
    res.end('Hello server!' + ++counter);
})