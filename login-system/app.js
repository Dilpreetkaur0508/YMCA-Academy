var express = require('express');
var session = require('client-sessions');
var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var dashboardRouter = require('./routes/dashboard-route');
var logoutRouter = require('./routes/logout-route');
var path = require('path');
const app = express();
//app.set('view-engine', 'ejs');

app.use(express.urlencoded({extended : false}));

app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', dashboardRouter);
app.use('/', logoutRouter);


app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
  //response.render('index.ejs');
});
app.get('/index.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
  //response.render('index.ejs');
});
app.get('/AssessmentPage', function(request, response) {
	response.sendFile(path.join(__dirname + '/AssessmentPage.html'));
});
app.get('/AssessmentPage.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/AssessmentPage.html'));
});
app.get('/contact.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/contact.html'));
});
app.get('/chess-course-page.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/chess-course-page.html'));
});
app.get('/yoga-course-page.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/yoga-course-page.html'));
});
app.get('/meditation-course-page.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/meditation-course-page.html'));
});
app.get('/art-course-page.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/art-course-page.html'));
});
app.get('/Register.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/views/Register.ejs'));
});


app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

/*app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))*/

app.listen(3000);