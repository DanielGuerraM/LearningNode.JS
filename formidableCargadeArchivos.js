const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:\\Users\\Danie\\Desktop\\Node' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, () => {
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    }
    else {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`The server is up on port ${port}`);
});
