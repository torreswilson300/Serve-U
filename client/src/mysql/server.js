const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_STUDENTS = 'SELECT * FROM students';
const SELECT_ALL_ORGS = 'SELECT * FROM organizations';
const SELECT_ALL_POSTS = 'SELECT * FROM post'

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'tcwi4826',
database: 'serveu'
});

connection.connect(err => {
    if(err){
        return err;
    }
});


app.use(cors());

app.get('/', (req,res) => {
    res.send('The Server is live! Go to /students to view students, Go to /orgs to view organizations')
});

app.get('/students/addStudent',(req,res) => {
    const {Username, FirstName, LastName, Email, Password} = req.query;
    const INSERT_STUDENTS_QUERY = `INSERT INTO students (Username, FirstName, LastName, Email, Password) VALUES('${Username}','${FirstName}','${LastName}','${Email}','${Password}')`;
    connection.query(INSERT_STUDENTS_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('Student has been added')
        }
    });
});

app.get('/orgs/addOrg',(req,res) => {
    const {Username, OrgName, Email, Password, Description} = req.query;
    const INSERT_ORGS = `INSERT INTO organizations (Username, OrgName, Email, Password, Description) VALUES('${Username}', '${OrgName}', '${Email}', '${Password}', '${Description}')`;
    connection.query(INSERT_ORGS, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('Org has been added')
        }
    });
});

app.get('/posts/addPost',(req,res) => {
    const {Headline, HostOfEvent, Date, StartTime, EndTime, HoursReceived, Description, Url } = req.query;
    const INSERT_POST = `INSERT INTO post (Headline, HostOfEvent, Date, StartTime, EndTime, HoursReceived, Description, Url) VALUES('${Headline}', '${HostOfEvent}', '${Date}', '${StartTime}', '${EndTime} ', '${HoursReceived} ', '${Description} ', '${Url} ')`;
    connection.query(INSERT_POST, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.send('Post has been added')
        }
    });
});


app.get('/Students', (req,res) => {
    connection.query(SELECT_ALL_STUDENTS, (err,results) => {
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

app.get('/Orgs', (req,res) => {
    connection.query(SELECT_ALL_ORGS, (err,results) => {
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

app.get('/Posts', (req,res) => {
    connection.query(SELECT_ALL_POSTS, (err,results) => {
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
    console.log('The server listening on port 4000')} );
