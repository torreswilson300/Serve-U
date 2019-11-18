const express = require('express')
const students = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Student = require('../models/Students.js')
students.use(cors())

process.env.SECRET_KEY = 'secret'

students.post('/register', (req, res) => {
  const userData = {
    Username: req.body.Username,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Password: req.body.Password,
  }

  Student.findOne({
    where: {
      Email: req.body.Email
    }
  })
    //TODO bcrypt
    .then(student => {
      if (!student) {
        bcrypt.hash(req.body.Password, 10, (err, hash) => {
          userData.Password = hash
          Student.create(userData)
            .then(student => {
              res.json({ status: student.Email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        alert("Student already exist!")
        res.json({ error: 'Student already exists' })
        
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//LOGIN
students.post('/login', (req, res) => {
  Student.findOne({
    where: {
      Email: req.body.Email
    }
  })
    .then(student => {
      if (student) {
        if (bcrypt.compareSync(req.body.Password, student.Password)) {
          let token = jwt.sign(student.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'Student does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})
//PROFILE
students.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Student.findOne({
    where: {
      UserID: decoded.UserID
    }
  })
    .then(student => {
      if (student) {
        res.json(student)
      } else {
        res.send('Student does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = students
