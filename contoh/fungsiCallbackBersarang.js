var fs = require('fs');

fs.rename('tes.txt', 'tes_old.txt',
    // fungsi callback 1
    function(error) {
        if(error) throw error;
        console.log('File berhasil di-rename!');
        fs.unlink('tes_old.txt',
            // fungsi callback 2
            function(error) {
                if(error) throw error;
                console.log('File berhasil di-delete!');
            }
        );
    }
);