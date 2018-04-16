var http = require('http');
var cajero = require('./public/js/cajero');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write("dar dinero en: " + JSON.stringify(cajero.entrega([4720])));
    res.end();
}).listen(8080);