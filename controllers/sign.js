/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-02 15:51:24
 * @version : 0.0.1
 */
var User = require('../query').user;
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);
exports.signIn = function(req, res) {

}

exports.signUp = function(req, res, next){
	var body = req.body;
	bcrypt.hash(body.password.trim(),salt,null,function(err, hash){
		if(err) return next(err);
		User.newUser({
			loginName:body.login_name.trim(),
			password: hash,
			sex: body.sex
		},function(){
			res.redirect('signIn')
		})
	})
}

exports.signInShow = function(req, res) {
	res.render('user/signIn', {title:'登录'});
}

exports.signUpShow = function(req, res) {
	res.render('user/signUp', {title:'加入'});
}