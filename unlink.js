//unlink method is for to deleting existing files
const fs = require('fs');

fs.unlink('FileCreated3.txt', (err) => {
    if(err) throw err;
    console.log('File deleted!');
});