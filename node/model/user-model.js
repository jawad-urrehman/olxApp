var mongoose = require('mongoose');
var schema = mongoose.Schema({
        UserName:String,
        email:String,
        password:String,
        phone:String
});

var User  = module.exports = mongoose.model('User',schema);