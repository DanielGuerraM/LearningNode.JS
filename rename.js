const fs = require('fs');

fs.rename('FileCreated.txt', 'updatedName.txt', (err) => {
    if(err) throw err;
    console.log('the name was updated!');
})