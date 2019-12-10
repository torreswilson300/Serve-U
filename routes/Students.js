const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Student = require('../models').Student;
const Post = require('../models').Post;
const StudentOrg = require('../models').StudentOrg;
const Organization = require('../models').Organization;
const StudentPost = require('../models').StudentPost;

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

//app.get('/', (req, res) => res.render('index', {layout: 'landing', isOrg:hbsContent.isOrg}));


//Get org list (student view)
router.get('/listOrgs', (req, res) => 
//     console.log(hbsContent);    
Organization.findAll({
      //  include: [Post]
    }).then(orgs => {
      //  console.log(hbsContent) 
    res.render('listOrgs', {
        isStudent: hbsContent.isStudent,
        loggedin: hbsContent.loggedin,
       orgs:orgs
    });}).catch(err => console.log(err)));

//Allows Students to join org    
router.post('/listOrgs', (req,res) =>{

    var temp = JSON.stringify(req.body)
    var t = temp.match(/[0-9]+(,[0-9]+)*/g)  
   console.log(t)

        var stID = Promise.resolve(hbsContent.id)
        Student.findOne({where: {id: req.session.user.id}})
        .then((stud)=> {
            var st = stud; 
    Organization.findAll({where: {id: t } , include: ['student']})
    .then((organizations) => {
        // For Each Org ID setthe Student
        console.log(organizations)
        organizations.forEach(organization => {
            
            organization.addStudent(st)// student is an array (one org hasMany students)
            .then((joinedStudentToOrg) => {
                console.log(joinedStudentToOrg)
                
            })
            .catch((err) => console.log("Error while joining Organizations and Students : ", err))
        })
    })
    .catch((err) => console.log("Error while searching for Organization : ", err))
    res.redirect('/students/dash')

})})

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
}})
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
Post.findAll().then(posts => {

  // console.log(posts[0].start);

    res.render('joinPost', {
       posts:posts, 
       isStudent: hbsContent.isStudent,
       loggedin: hbsContent.loggedin
    });}).catch(err => console.log(err)));

//Get All Events
router.post('/posts', (req,res) =>{

    var temp = JSON.stringify(req.body)
    var t = temp.match(/[0-9]+(,[0-9]+)*/g) 

   //console.log(t)
//-------------------------------------------------------------------
//Adds hours from post to hours attempted
   Post.findAll({
       where: { id: t},
       attributes: ['hoursReceived'],
   }).then(hours => {
       var h = JSON.stringify(hours)
       var x = h.match(/[0-9]+(,[0-9]+)*/g)
       var hrsAtt = sum(x) 
       console.log(hrsAtt)

       Student.findOne({
           where:{ id: req.session.user.id}
       })
       .then(student => {
           student.hoursAttempted = student.hoursAttempted + hrsAtt
           student.save()
           console.log(student)
       }
//-------------------------------------------------------------
       )
   })

         var stID = Promise.resolve(hbsContent.id)
         Student.findOne({where: {id: req.session.user.id}})         
         .then((stud)=> {
             var st = stud; 
    Post.findAll({where: {id: t } , include: ['student']})
    .then((posts) => {
        // For Each Post ID add the Student
        console.log(posts)
        posts.forEach(post => {
            
            post.addStudent(st)// student is an array (one org hasMany students)
            .then((joinedStudentToPost) => {
                console.log(joinedStudentToPost)
            })
            .catch((err) => console.log("Error while joining Posts and Students : ", err))
        })
    })
    .catch((err) => console.log("Error while searching for Post : ", err))
    res.redirect('/students/dash')

})
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


//This shows a list of students for a particular Post
router.get('/view/:postId', (req,res) => {
    var id = req.params.postId
    //Get students for a given Post
Post.findByPk(id,{include: ['student']})
.then((post) => {
    var s = []
    s = post.student
    console.log(s)

    // for(i in post.student)
    
       // console.log(post.get({plain:true}))
     //   console.log(s.firstName)
        
        res.render('viewAttending',{
            s:s,
            isStudent: hbsContent.isStudent,
            loggedin: hbsContent.loggedin})
            //console.log(s)
    })       
})



//This shows a list of post for the student
router.get('/viewEvents', (req,res) => {
    var id = hbsContent.id
    //Get posts for a given Student
Student.findByPk(id,{include: ['post']})
.then((student) => {
    var p = []
    p = student.post
    console.log(p)
    
  //  console.log(p)
        
        res.render('viewEvents',{
            p:p,
            isStudent: hbsContent.isStudent,
            loggedin: hbsContent.loggedin})
            //console.log(s)
    })       
})


//This shows a list of orgs for the student
router.get('/viewOrgs', (req,res) => {
    var id = hbsContent.id
    //Get orgs for a given Student
Student.findByPk(id,{include: ['organization']})
.then((student) => {
    var org = []
    org = student.organization
    //console.log(org)
        
        res.render('viewOrgs',{
            org:org,
            isStudent: hbsContent.isStudent,
            loggedin: hbsContent.loggedin})
            //console.log(s)
    })       
})




//Route to Leave Org (Student)
router.get('/leave/:orgId' , (req, res) => {
    var id = req.params.orgId
   // console.log(id)

   StudentOrg.findOne({ where: { organizationId: id , studentId: hbsContent.id}})
   .then(function(org){
       console.log(org)
        org.destroy()
        res.render('leave' , hbsContent)
    
    })

})


//Route to Remove Post (Student)
router.get('/removeEvent/:postId' , (req, res) => {
    var id = req.params.postId
   // console.log(id)

   StudentPost.findOne({ where: { postId: id , studentId: hbsContent.id}})
   .then(function(post){
       Post.findOne({where:{id: postId}})
       .then((p) => {
           console.log(p)
       })
      // console.log(post)
        // post.destroy()
        // res.render('deleted' , hbsContent)
    
    })

})




router.get('/feedback' , (req,res) =>{
    res.render('feedback', hbsContent)
})



router.get('/about' , (req, res) => {
    res.render('about' , hbsContent)})


function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }

module.exports = router;