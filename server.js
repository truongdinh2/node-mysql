//khai báo module sử dụng
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose')
var route = require('./api/routers/routes')
// require('./api/models/model')
var mysql = require('mysql2');
//thiết lập connection
// mongoose.connect('mongodb://localhost/user', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,

// })
//thiết lập phân tích các request tới server
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "truongtt",
  database: "list_todos"
})
con.connect(function (err) {
  if (err) {
    console.log(err, 'err')
  }
});

//truy cập tới các tệp tin trong route
// route(app);

app.get('/createDatabase', (req, res) => {
  let sql = "CREATE DATABASE list_todos"
  con.query(sql, function (err, result) {
    if (err) { console.log(err) };
    console.log(result)
    res.json(result)
  })
})
app.get('/createTable', (req, res) => {
  let sql = 'CREATE TABLE Persons ( int NOT NULL AUTO_INCREMENT,LastName varchar(255) NOT NULL,FirstName varchar(255),Age int,PRIMARY KEY (ID))'
  con.query(sql, function (err, result) {
    if (err) { console.log(err) };

    res.json(result)
  })
})
// MIN
app.get('/minTable', (req, res) => {
  let sql = "SELECT * FROM Persons WHERE Age = (SELECT MIN(Age) from Persons)";
  con.query(sql, (err, result) => {
    if (err) return res.status(400).json(err);
    return res.json(result)
  })
})
app.get('/getAllDataTable', (req, res) => {
  let sql = "SELECT * FROM Persons";
  con.query(sql, (err, result) => {
    if (err) return res.status(400).json(err);
    return res.json(result)
  })
})



app.get('/*', function (req, res) {
  res.send('page not found')
});
// lắng nghe các kết nối trên máy chủ và cổng được chỉ định
app.listen(3000, () => {
  console.log("connected to port 3000")
})

module.exports = con;