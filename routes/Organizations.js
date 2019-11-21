const express = require('express')
const organizations = express.Router()
const posts = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Organization = require('../models/Organizations');
const Post = require('../models/Post');

organizations.use(cors())
posts.use(cors())

process.env.SECRET_KEY = 'secret'

organizations.post('/registerOrg', (req, res) => {
  const userData = {
    Username: req.body.Username,
    OrgName: req.body.OrgName,
    Email: req.body.Email,
    Password: req.body.Password,
    Description: req.body.Description
  }

  Organization.findOne({
    where: {
      Email: req.body.Email
    }
  })
    //TODO bcrypt
    .then(organization => {
      if (!organization) {
        bcrypt.hash(req.body.Password, 10, (err, hash) => {
          userData.Password = hash
          Organization.create(userData)
            .then(organization => {
              res.json({ status: organization.Email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'Organization already exists' })
        
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//LOGIN
organizations.post('/orgLogin', (req, res) => {
  Organization.findOne({
    where: {
      Email: req.body.Email
    }
  })
    .then(organization => {
      if (organization) {
        if (bcrypt.compareSync(req.body.Password, organization.Password)) {
          let token = jwt.sign(organization.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'Organization does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})
//PROFILE
organizations.get('/profile', (req, res) => {
 // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Organization.findOne({
    where: {
      //Username: req.body.Username
      OrgId: decoded.OrgId
    }
  })
    .then(organization => {
      if (organization) {
        res.json(organization)
      } else {
        res.send('Organization does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//Opportunities 
posts.get('/Opportunity-page', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
 
   Post.findAll({})
     .then(post => {
       if (post) {
         res.json(post)
       } else {
         res.send('No Opportunities Available')
       }
     })
     .catch(err => {
       res.send('error: ' + err)
     })
 })

module.exports = organizations, posts
