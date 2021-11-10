var express = require('express');
var router = express();
/* GET users listing. */
router.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});
module.exports = router;