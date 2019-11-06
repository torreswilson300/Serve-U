const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pr0T3chTioN!?',
  database: 'serveu'
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});