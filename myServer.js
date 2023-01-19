const http = require('http');
const date = require('./modulo');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write(req.url);
    res.end();
});

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
}) 
