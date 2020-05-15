var fs = require('fs');

// baca file tes.txt
var data = fs.readFileSync('tes.txt');
console.log("Membaca file selesai: " + new Date().toISOString());

console.log("Setelah fungsi readFileSync: " + new Date().toISOString());