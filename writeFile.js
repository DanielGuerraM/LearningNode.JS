//writeFile can replace the old content, if not, he creates it as an empty file.
const fs = require('fs');

fs.writeFile('fileCreated.txt', 'This is a edited content', (err) => {
    if(err) throw err;
    console.log('saved!');
});