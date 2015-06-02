/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-02 15:51:24
 * @version : 0.0.1
 */
var User = require('../models').user;
var bcrypt = require('bcrypt-nodejs');

exports.signIn = function(req, res) {

}

exports.signUp = function(req, res){

}

exports.signInShow = function(req, res) {
	res.render('user/signIn', {});
}

exports.signUpShow = function(req, res) {
	res.render('user/signUp', {});
}