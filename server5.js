var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs-extra");

var unggah_file = multer({ dest: "unggah_file/" });
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// unggah file single
app.post("/file_single", unggah_file.single("file"), function (req, res, next) {
    // var file = req.file;
    console.log(req.file.originalname);
    var file = __dirname + "/" + req.file;
    fs.readFile(req.file.path, function (error, data) {
        fs.writeFile(file, data, function (error) {
            if (error) {
                console.log(error);
            } else {
                response = {
                  message: "File berhasil diunggah!",
                  filename: req.file.originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
    /*if (!file) {
        var error = new Error("Unggah sebuah file...")
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file);*/
});

// unggah file multiple
app.post("/file_multi", unggah_file.array("file", 12), function (req, res, next) {
    var files = req.files
    if (!files) {
        var error = new Error("Unggah beberapa file...")
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplikasi ini berada di http://%s:%s", host, port);
});
