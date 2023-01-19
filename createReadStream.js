var fs = require('fs');

var rs = fs.createReadStream('./updatedName.txt');

rs.on('open', () => {
    console.log('The file is open');
})