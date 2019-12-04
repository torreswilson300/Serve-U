const express = require('express');
const hbs = require('express-handlebars');
const helpers = require('handlebars-helpers');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const path = require('path');

//Database
const db = require('./config/database');

//Test DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))


const app = express();

//Handlebars
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Body Parser
app.use(bodyParser.urlencoded({extend: false}));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

// // middleware function to check for logged-in users
// var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.redirect('/dash');
//     } else {
//         next();
//     }    
// };

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

var hbsContent = {id: '' , orgName: '', email: '', loggedin: false, isOrg: false, isStudent: false, title: "You are not logged in today", body: "Hello World"}; 


app.get('/', (req, res) => res.render('index', {layout: 'landing'}));

// Organization routes
app.use('/orgs', require('./routes/organizations'))
// Routes for all
app.use('/all', require('./routes/all'))
// Student routes
app.use('/students', require('./routes/students'))

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  });


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));