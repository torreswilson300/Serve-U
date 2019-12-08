const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Organization = require('../models').Organization;
const Post = require('../models').Post;

var hbsContent = {id: '' , orgName: '', email: '', loggedin: false, isOrg: false, isStudent: false, isApproved: false, title: "You are not logged in today", body: "Hello World"}; 
var count

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
		
        res.redirect('/orgs/dash');
    } else {
        next();
    }    
};


//Get org list
router.get('/list', (req, res) => 
//     console.log(hbsContent);    
Organization.findAll({
        attributes:{
            include: [[Sequelize.fn("COUNT",Sequelize.col("posts.id")), "numOfPost"]]
        },
        include: [{
            model: Post ,attributes: []
        }],
        group: ['Organization.id']
      //  include: [Post]
    })
    .then(orgs => {
        console.log(orgs), 
    res.render('orgs', {
        isOrg: hbsContent.isOrg,
        loggedin: hbsContent.loggedin,
       orgs:orgs 
    });
    
    })
.catch(err => console.log(err)));
//Display Dashboard
router.get('/dash', (req,res) => {
    if(req.session.user && req.cookies.user_sid){
        hbsContent.loggedin = true;
        hbsContent.isOrg = true;
        hbsContent.email = req.session.user.email;
        hbsContent.id = req.session.user.id;
        hbsContent.orgName = req.session.user.orgName;
    }
    Organization.findOne({ where: { email: hbsContent.email}})
    .then(orgs => {
        // console.log(orgs);
        res.render('dash',{
            orgName: orgs.orgName,
            email: orgs.email,
            numOfPost: orgs.numOfPost,
            description: orgs.description,
            isOrg: hbsContent.isOrg,
            loggedin: hbsContent.loggedin
        });
    })   

})
//Display add Org Form
router.get('/login', sessionChecker, (req, res) => res.render('login', hbsContent));
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
        res.render('login', {
            errors,
            email, 
            password, 
        });
    } else{
        Organization.findOne({ where: { email: email}})
        .then(function(org){
           if(!org){
               res.redirect('/login');
           } else if (!org.validPassword(password)){
               res.redirect('/login');
           } else {
               req.session.user = org.dataValues;
               res.redirect('/orgs/dash');
           }
        })
        

}
})
//Display add post form
router.get('/post', (req,res) => res.render('addPost', hbsContent));

// Add a Post
router.post('/post', (req,res) => {


    let {title, host, date, start, end, hoursReceived, description} = req.body;
    let organizationId = hbsContent.id;
    let org = hbsContent.orgName;
    let errors = [];

    // Validate Fields
    if(!title) {
        errors.push({ text: 'Please enter a Title'})
    }
    if(!host) {
        errors.push({ text: 'Please enter the Host'})
    }
    if(!date) {
        errors.push({ text: 'Please enter a Date (yyyy-mm-dd)'})
    } else if(date )
    if(!start) {
        errors.push({ text: 'Please enter a Start Time (hh:mm:ss)'})
    }
    if(!end) {
        errors.push({ text: 'Please enter a End Time (hh:mm:ss)'})
    }
    if(!hoursReceived) {
        errors.push({ text: 'Please enter Hours Received for Event (0, 1, 2)'})
    }
    if(!description) {
        errors.push({ text: 'Please give a Description'})
    }   

    //Check for Errors
    if(errors.length > 0){
        res.render('addPost', {
            errors,
            title, 
            host, 
            date, 
            start, 
            end, 
            hoursReceived, 
            description,
            hbsContent
        });
    } else {
            //Insert into table
                    Post.create({
                        title, 
                        host, 
                        date, 
                        start, 
                        end, 
                        hoursReceived, 
                        description,
                        org,
                        organizationId
                    })
                    .then(res.redirect('/orgs/dash'))
                    .catch(err => console.log(err));
                
                    
        Organization.findOne({
            where:{ id: req.session.user.id}
        })
        .then(o => {
            o.numOfPost = o.numOfPost + 1
            o.save()
            console.log(o)
        })


                }

})

//Display add Org Form
router.get('/add', (req, res) => res.render('addOrg'));
// Add a Org
router.post('/add', (req,res) => {

    let {username, orgName, email, password, description} = req.body;
    let errors = [];

    // Validate Fields
    if(!username) {
        errors.push({ text: 'Please enter a Username'})
    }
    if(!orgName) {
        errors.push({ text: 'Please enter the Organization Name'})
    }
    if(!email) {
        errors.push({ text: 'Please enter a Email'})
    }
    if(!password) {
        errors.push({ text: 'Please enter a Password'})
    }
    if(!description) {
        errors.push({ text: 'Please give a Description'})
    }

    //Check for Errors
    if(errors.length > 0){
        res.render('addOrg', {
            errors,
            username, 
            orgName, 
            email, 
            password, 
            description,
            hbsContent
        });
    } else {
        var count;
            //Insert into table
                    Organization.create({
                        username,
                        orgName,
                        email,
                        password,
                        description,
                                    })
                    
                    .then(org =>{ 
                        req.session.user = org.dataValues;
                        res.redirect('/orgs/login')})
                    .catch(err => console.log(err));      
                }
})
//logout
router.get('/logout', (req, res) => {
    hbsContent.loggedin = false; 
    hbsContent.isOrg = false;
    hbsContent.isStudent = false;
    hbsContent.title = "You are logged out!"; 
    res.clearCookie('user_sid');
    console.log(JSON.stringify(hbsContent)); 
    res.redirect('/');
});

//Get All Events
router.get('/posts', (req, res) => 
Post.findAll()
    .then(posts => {
    // console.log(posts);
    res.render('postList', {
        isOrg: hbsContent.isOrg,
        loggedin: hbsContent.loggedin,
       posts:posts 
    });
    })
.catch(err => console.log(err)));

//Route Home
router.get('/' , (req, res) => {
    res.render('index' , hbsContent)})

//Route to About Page
router.get('/about' , (req, res) => {
    res.render('about' , hbsContent)})
  

//This shows a list of students for a particular Post
router.get('/viewStudents', (req,res) => {
    var id = req.session.user.id
    //Get students for a given Post
Organization.findByPk(id,{include: ['student']})
.then((org) => {
    var o = []
    o = org.student
    console.log(o)

        res.render('viewStudents',{
            o:o,
            isApproved: hbsContent.isApproved,
            isOrg: hbsContent.isOrg,
            loggedin: hbsContent.loggedin})
            //console.log(s)
    })       
})

//Route to Approve
router.get('/approve/:studId' , (req, res) => {
    var id = req.params.studId
    console.log(id)
    res.render('approve' , hbsContent)})


router.get('/deny/:studId' , (req, res) => {
    var id = req.params.studId
    console.log(id)
    res.render('deny' , hbsContent)})    


module.exports = router;