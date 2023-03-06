const mongoose = require("mongoose");

const newSessionSchema = new mongoose.Schema({expires:Date,session:String},{collection:'sessions'})

module.exports = mongoose.model('sessions',newSessionSchema)