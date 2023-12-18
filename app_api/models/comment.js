var mongoose = require('mongoose')
var CommentSchema = new mongoose.Schema({
    author: {type: String, required: true},
    rating: {type: Number,min:0,max:5},
    date: {type: Date,default: Date.now},
    text: {type: String, required: true}
})
module.exports = CommentSchema
