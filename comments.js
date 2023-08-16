//Create Web Server
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var sql = require("mssql");
  var config = {user:'user', password:'pass', server:'myServer', database:'myDB'};
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query('SELECT CompanyName, City, Country FROM Customers', function (err, recordset) {
      if (err) console.log(err)
      res.send(recordset);
    });
  });
});

var server = app.listen(5000, function () {
console.log('Server is running..');
});