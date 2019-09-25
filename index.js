const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM demo';

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Pr0T3chTioN!?',
database: 'temp_for_demo'
});

connection.connect(err => {
    if(err){
        return err;
    }
});


app.use(cors());

app.get('/', (req,res) => {
    res.send('The user Server is live! Go to /users to view users')
});

app.get('/users/addUser',(req,res) => {
    const {Username, FirstName, LastName, Email, Password, UserID} = req.query;
    const INSERT_USERS_QUERY = `INSERT INTO demo (Username, FirstName, LastName, Email, Password, UserID) VALUES('${Username}', '${FirstName}','${LastName}', '${Email}','${Password}', ${UserID})`;
    connection.query(INSERT_USERS_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('User has been added')
        }
    });
});

app.get('/users', (req,res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err,results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    });

});

app.listen(4000, () => {
    console.log('User server listening on port 4000')} );
