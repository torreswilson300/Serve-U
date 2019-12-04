const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Organization = require('../models/Organization');
const Post = require('../models/Post');

var hbsContent = {id: '' , email: '', loggedin: false, isOrg: false, isStudent: false, title: "You are not logged in today", body: "Hello World"}; 

//Get All Events
router.get('/posts', (req, res) => 
Post.findAll()
    .then(posts => {
    console.log(posts);
    res.render('postList', {
       posts:posts 
    });
    })
.catch(err => console.log(err)));

module.exports = router;