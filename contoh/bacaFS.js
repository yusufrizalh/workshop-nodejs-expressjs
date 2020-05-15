var fs = require('fs');
fs.readFile('tes.txt', function(error, data) {
    if(error) throw error;
    console.log(data);
});