var http = require('http');
var cajero = require('./public/js/cajero');

//faltaria agrgar que se reciba por un querysring y que regrese ese valor que se madne en el quiery string
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write("dar dinero en: " + JSON.stringify(cajero.entrega([4720])));
    res.end();
}).listen(8080);