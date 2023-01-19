const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data) {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write(data);
        return res.end();
    });
});

server.listen(port);


