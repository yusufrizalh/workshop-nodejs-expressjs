var fs = require('fs');

// baca file tes.txt
fs.readFile('tes.txt', 
    // fungsi callback dipanggil ketika pembacaan file selesai
    function(error, data) {
        if(error) throw error;
        // data adalah buffer yang berisi konten file
        console.log("Pembacaan file selesai: " + new Date().toISOString());
    }
);
console.log("Setelah readFile asinkron: " + new Date().toISOString());