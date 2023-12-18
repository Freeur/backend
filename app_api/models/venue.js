var mongoose = require('mongoose')
var CommentSchema = require('./comment')
var HourSchema = require('./hour')
var VenueSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: {type: Number,min: 0, max:5, default:0},
    foodanddrink: [String],
    coordinates: {type: [Number],index: '2dsphere'},
    hours: [HourSchema],
    comments: [CommentSchema],
});
var VenueModel = mongoose.model('venue',VenueSchema,"venues")
module.exports = VenueModel
