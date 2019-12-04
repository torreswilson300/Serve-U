const express = require('express')
const organizations = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Organization = require('../models/Organizations')
organizations.use(cors())

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
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Organization.findOne({
    where: {
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

/*
// Create Opportunities 
organizations.post('/createOpp', (req, res) => {
  const postData = {
    Headline: req.body.Headline,
    Host: req.body.Host,
    Date: req.body.Date,
    StartTime: req.body.StartTime,
    EndTime: req.body.EndTime,
    HoursReceived: req.body.HoursReceived,
    Description: req.body.Description,
    Url: req.body.Url,
    organizations_OrgId: req.body.organizations_OrgId
  }

  Post.findOne({
    where: {
      Headline: req.body.Headline, Date: req.body.Date
    }
  })
  
    .then(post => {
      if (!post) {
          Post.create(postData)
            .then(post => {
              res.json({ status: post.Headline + ' Created!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      } else {
        res.json({ error: 'Post already exists' })
        
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
*/
module.exports = organizations
