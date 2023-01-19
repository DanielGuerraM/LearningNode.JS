const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
});

server.listen(port, () => {
    console.log(`Este servidor se esta ejecutando en el puerto: ${port}`);
});

