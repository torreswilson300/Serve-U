const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Organization = require('../models').Organization;
const Post = require('../models').Post;

var hbsContent = {id: '' , orgName: '', email: '', loggedin: false, isOrg: false, isStudent: false, title: "You are not logged in today", body: "Hello World"}; 
var count

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
		
        res.redirect('/orgs/dash');
    } else {
        next();
    }    
};

router.get('/', (req, res) => res.render('index', {layout: 'landing', isOrg: hbsContent.isOrg}));

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
    Organization.findAll({
        where: { email: hbsContent.email},
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
          console.log(orgs);
        //  console.log(hbsContent);
        res.render('dash', {
            isOrg: hbsContent.isOrg,
            loggedin: hbsContent.loggedin,
            orgs:orgs
            // orgName: orgs.orgName,
            // description: orgs.description,
            // email: orgs.email,
            // numOfPost: orgs.numOfPost
           
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
            var count;
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
                    Organization.numOfPost + 1
                    .then(res.redirect('/orgs/list'))
                    .catch(err => console.log(err));      
                }
})
router.put ('/post', (req,res) =>{

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


module.exports = router;