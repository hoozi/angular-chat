/**
* @authors : hoozi
* @webSite : https://github.com/hoozi 
* @email   : 287036406@qq.com
* @date    : 2015-06-02 13:32:10
* @version : 0.0.1
*/
var config = require('../config');
var mongoose = require('mongoose');
mongoose.connect(config.db.url);

require('./user');

exports.user = mongoose.model('user')
