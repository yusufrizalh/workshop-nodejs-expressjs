// menyertakan modul yang akan digunakan
var fs = require('fs');

// menghapus fungsi yang akan dioverride
delete fs['readFile'];

// menambah fungsi baru dengan nama yang sama 
// seperti fungsi yang dihapus sebelumnya
fs.readFile = function(str) {
    console.log("Fungsi telah dioverride!");
    console.log(str);
}

// export ulang modul agar terjadi efek perubahan
module.exports = fs

// menggunakan fungsi yang sudah dioverride
fs.readFile("tes.txt");