var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var sign = controllers.sign;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

.get('/signIn', sign.signInShow)

.get('/signUp', sign.signUpShow)

module.exports = router;
