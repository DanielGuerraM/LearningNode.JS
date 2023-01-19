const fs = require('fs');

fs.open('fileCreated2.txt', 'w', (err, file) => {
    if(err) throw err;
    console.log('saved!');
});