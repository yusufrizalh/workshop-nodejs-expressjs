var express = require("express");
var app = express();

app.use(express.static("public"));

// ini merespon request GET di halaman awal
app.get("/", function (req, res) {
  console.log("Mendapat request GET untuk halaman awal");
  res.send("Hello Inixindo!");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplikasi ini berada di http://%s:%s", host, port);
});