var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", function (req, res) {
  // menyiapkan keluaran dalam bentuk JSON
  response = {
    firstname: req.query.firstname,
    lastname: req.query.lastname,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplikasi ini berada di http://%s:%s", host, port);
});