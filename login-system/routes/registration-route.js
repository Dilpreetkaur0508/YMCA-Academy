var express = require('express');
var router = express();
var db=require('../db');

// to display registration form 
router.get('/register', function(req, res, next) {
  res.render('Register.ejs');
});

// to store user input detail on post request
router.post('/register', function(req, res, next) {
    
    inputData ={
       name: req.body.name,
        email: req.body.email,
        service: req.body.service,
    }
// check unique email address
var sql='SELECT * FROM registrations WHERE email =?';
db.query(sql, [inputData.email] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email+ " already exist";
 }else{
     
    // save users data into database
    var sql = 'INSERT INTO registrations SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
           
  var msg ="Your are successfully registered";
 }
 res.render('Register.ejs',{alertMsg:msg});
})
     
});
module.exports = router;