var mongoose = require('mongoose');

var schema = mongoose.Schema({
        name:String,
        category:String,
        image:String,
        discription:String,
        address:String,
        userId:String,
        price:String
});

var Item = module.exports = mongoose.model('itemShema',schema);