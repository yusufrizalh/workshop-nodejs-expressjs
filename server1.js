var express = require("express");
var app = express();

// ini merespon request GET di halaman awal
app.get("/", function (req, res) {
    console.log("Mendapat request GET untuk halaman awal");
    res.send("Hello GET");
});

// ini merespon request POST di halaman awal
app.post("/", function (req, res) {
    console.log("Mendapat request POST untuk halaman awal");
    res.send("Hello POST");
});

// ini merespon request DELETE di halaman /del_user
app.delete("/del_user", function (req, res) {
    console.log("Mendapat request DELETE untuk halaman /del_user");
    res.send("Hello DELETE");
});

// ini merespon request GET di halaman /list_user
app.get("/list_user", function (req, res) {
    console.log("Mendapat request GET untuk halaman /list_user");
    res.send("Hello GET list_user");
});

// ini merespon request GET untuk abcd, abxcd, ab123cd dan sebagainya
app.get("/ab*cd", function (req, res) {
    console.log("Mendapat request GET untuk halaman /ab*cd");
    res.send("Hello GET dengan pattern ab*cd");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplikasi ini berada di http://%s:%s", host, port);
});