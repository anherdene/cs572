const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    let reqRead = fs.readFile(req);
    res.write('File uploaded and moved!');
    res.end();
}).listen(1337);