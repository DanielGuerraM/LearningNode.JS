//the mothod appendFile is for to add new content if it exists, if no, it creates it
const fs = require('fs');

fs.appendFile('FileCreated.txt', 'Hello content', function(err) {
    if(err) throw err;
    console.log('saved!');
});
