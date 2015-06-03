var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var tools = require('../tools');
var validator = tools.validator;
var sign = controllers.sign;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

//登录
.get('/signIn', sign.signInShow)

//注册
.get('/hasName', function(req, res){
	var login_name = req.query.login_name;
	validator.hasName(login_name, function(err, user) {
		if(user) {
			res.send("0")
		} else {
			res.send("1")
		}
	})
})
.get('/signUp', sign.signUpShow)
.post('/signUp', sign.signUp)

module.exports = router;
