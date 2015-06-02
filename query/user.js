/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-02 15:47:27
 * @version : 0.0.1
 */
var User = require('../models').user;

exports.newUser = function(data, callback) {
	var user = new User(data);
	user.save(callback);
}
exports.getUserByName = function(login_name, callback) {
	User.findOne({'loginName':login_name}, callback);
}
exports.getUsersByNames = function(names, callback) {
	User.find({'loginName':{'$in':names}}, callback);
}
exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}
exports.getUsersByIds = function(ids, callback) {
	User.find({'_id':{'$in':ids}}, callback);
}