const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Student = require('../models').Student;
const Post = require('../models').Post;
const StudentOrg = require('../models').StudentOrg;

var hbsContent = {id: '' , username: '', email: '', loggedin: false, isOrg: false, isStudent: false, title: "You are not logged in today", body: "Hello World"}; 

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
		
        res.redirect('/dash');
    } else {
        next();
    }    
};
//Display Dashboard
router.get('/dash', (req,res) => {
    if(req.session.user && req.cookies.user_sid){
        hbsContent.loggedin = true;
        hbsContent.isStudent = true;
        hbsContent.email = req.session.user.email;
        hbsContent.id = req.session.user.id;
        hbsContent.username = req.session.user.username;
    }
    Student.findOne({ where: { email: hbsContent.email}})
    .then(students => {
        // console.log(students);
        res.render('studentDash',{
            firstName: students.firstName,
            lastName: students.lastName,
            email: students.email,
            hoursAttempted: students.hoursAttempted,
            hoursCompleted: students.hoursCompleted,
            isStudent: hbsContent.isStudent,
            loggedin: hbsContent.loggedin
        });
    })  

})
//Display add Student Form
router.get('/login', sessionChecker, (req, res) => res.render('loginStudent', hbsContent));
//Login
router.post('/login', (req,res) => {

    let {email, password} = req.body;
    let errors = [];

    // Validate Fields
    if(!email) {
        errors.push({ text: 'Please enter a Email'})
    }
    if(!password) {
        errors.push({ text: 'Please enter a Password'})
    }

    //Check for Errors
    if(errors.length > 0){
        res.render('loginStudent', {
            errors,
            email, 
            password, 
        });
    } else{
        Student.findOne({ where: { email: email}})
        .then(function(student){
           if(!student){
               res.redirect('/login');
           } else if (!student.validPassword(password)){
               res.redirect('/login');
           } else {
               req.session.user = student.dataValues;
               res.redirect('/students/dash');
           }
        })
        .catch(err => console.log(err));
}
})
//Display add Student Form
router.get('/add', (req, res) => res.render('addStudent'));
// Add a Student
router.post('/add', (req,res) => {

    let {username, firstName, lastName, email, password} = req.body;
    let errors = [];

    // Validate Fields
    if(!username) {
        errors.push({ text: 'Please enter a Username'})
    }
    if(!firstName) {
        errors.push({ text: 'Please enter your First Name'})
    }
    if(!lastName) {
        errors.push({ text: 'Please enter your Last Name'})
    }
    if(!email) {
        errors.push({ text: 'Please enter a Email'})
    }
    if(!password) {
        errors.push({ text: 'Please enter a Password'})
    }
    //Check for Errors
    if(errors.length > 0){
        res.render('addStudent', {
            errors,
            username, 
            firstName, 
            lastName, 
            email, 
            password
        });
    } else {
            //Insert into table
                    Student.create({
                        username, 
                        firstName, 
                        lastName, 
                        email, 
                        password
                    })
                    
                    .then(student =>{ 
                        req.session.user = student.dataValues;
                        res.redirect('/students/dash')})
                    .catch(err => console.log(err));      
                }
})
//Get All Events
router.get('/posts', (req, res) => 
Post.findAll()
    .then(posts => {
    console.log(posts);
    res.render('joinPost', {
       posts:posts, 
       isStudent: hbsContent.isStudent,
       loggedin: hbsContent.loggedin
    });
    })
.catch(err => console.log(err)));

//Get All Events
router.post('/posts', (req, res) => 
Post.findAll()
    .then(posts => {
    console.log(posts);
    res.render('joinPost', {
       posts:posts 
    });
    })
.catch(err => console.log(err)));

//logout
router.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        hbsContent.loggedin = false; 
        hbsContent.isOrg = false;
        hbsContent.isStudent = false;
		hbsContent.title = "You are logged out!"; 
        res.clearCookie('user_sid');
		console.log(JSON.stringify(hbsContent)); 
        res.redirect('/');
    }
});

router.get('/about' , (req, res) => {
    res.render('about')
})


module.exports = router;