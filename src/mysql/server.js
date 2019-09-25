const mysql = require('mysql');

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "3306",
  password: "Pr0T3chTioN!?",
  database: "temp_for_demo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});