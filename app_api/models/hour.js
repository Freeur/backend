var mongoose = require('mongoose')
var HourSchema = new mongoose.Schema({
    days: {type: String, required: true},
    open: String,
    close: String,
    isClosed: {type: Boolean, required: false}
})
module.exports = HourSchema