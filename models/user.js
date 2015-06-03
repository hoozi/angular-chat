/**
* @authors : hoozi
* @webSite : https://github.com/hoozi 
* @email   : 287036406@qq.com
* @date    : 2015-06-02 13:32:01
* @version : 0.0.1
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.Types.ObjectId;

var friendSchema = new Schema({
	friendId: objectId,
	friendName: String,
	friendSex: {type: Number, default: 0},//0 male,1 female
	friendAddTime: {type: Date, default: Date.now}
})
var userSchema = new Schema({
	loginName: String,
	password: String,
	sex: {type: Number, default: 0}, //0 male,1 female
	by: objectId,
	token: String,
	createTime: {type: Date, default: Date.now},
	friends: [friendSchema]
});
userSchema.index({loginName:1, createTime:-1})
module.exports = mongoose.model('user', userSchema);