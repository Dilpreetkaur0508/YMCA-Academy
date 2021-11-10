const express = require('express');
const app =express();

app.set('view-engine', 'ejs');

app.use(express.urlencoded({extended : false}));

app.get('/', function(req, res) {
	res.render('index.ejs');
});
app.get('/login', function(req, res) {
	res.render('login.ejs');
});
app.get('/register', function(req, res) {
	res.render('register.ejs');
});
app.post('/login', function(req, res) {
	res.render('register.ejs');
});
app.post('/register', function(req, res) {
	res.render('register.ejs');
});
app.listen(3000);