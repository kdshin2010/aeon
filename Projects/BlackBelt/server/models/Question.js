var mongoose = require('mongoose'),
	User = require('../models/User.js'),
    Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var QuestionSchema = new mongoose.Schema({
	question: String,
	correct: String,
	fake1: String,
	fake2: String
})



module.exports = mongoose.model('Question', QuestionSchema)
