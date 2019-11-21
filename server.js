const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')

var port = process.env.PORT || 4000



app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)


var Students = require('./routes/Students')
var Organizations = require('./routes/Organizations')

app.use('/students', Students)
app.use('/organizations', Organizations)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
