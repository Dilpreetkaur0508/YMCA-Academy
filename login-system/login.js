
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'academy'
});

var app = express();


app.use(session({
	secret: 'brobro',
	resave: true,
	saveUninitialized: true
}));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/index.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/AssessmentPage.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/AssessmentPage.html'));
});
app.get('/contact.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/contact.html'));
});
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register2.html'));
});
app.get('/login.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


app.post('/authRegister', function(request, response) {

   // var confirm_password = request.body.con_password;
    var users={
        
        "username":request.body.username,
        "password":request.body.password,
        "email":request.body.email
      }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } else {
          res.send({
            "code":200,
            "success":"user registered sucessfully"
              });
          }
      });
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
app.listen(3000);