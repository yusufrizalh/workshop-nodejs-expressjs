// menyertakan modul yang akan digunakan
var fs = require('fs');
 
// menambah sebuah fungsi, printMessage(), kedalam modul
fs.printMessage = function (str) {
  console.log("Pesan ini dari fungsi baru yang ditambahkan ke modul");
  console.log(str);
};

// export ulang modul agar terjadi efek perubahan
module.exports = fs

// sudah berhasil menambahkan fungsi kedalam modul
fs.printMessage("Berhasil!");