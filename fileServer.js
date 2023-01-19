const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if(err){
            res.writeHead(404, {'content-type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
});