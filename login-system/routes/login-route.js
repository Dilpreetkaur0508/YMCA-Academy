var express = require('express');
var router = express();
var session = require('express-session');
var db=require('../db');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login.ejs');
});

router.post('/login', function(req, res){
    let email = req.body.email;
    var password = req.body.password;

    var sql='SELECT * FROM users WHERE email =? AND password =?';
    db.query(sql, [email, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
           // req.session.loggedinUser= true;
           // req.session.email= email;

            req.session.user = email;
            res.redirect('dashboard.ejs');
        }else{
            res.render('login.ejs',{alertMsg:"Your Email Address or password is wrong"});
        }
    })

})

module.exports = router;