/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-03 14:22:05
 * @version : 0.0.1
 */
var User = require('../query').user;

exports.hasName = function(login_name, callback) {
	User.getUserByName(login_name, callback);
}