var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Question = require('../models/Question.js'),
	ObjectId = Schema.ObjectId,
	passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
	username: String,
	password: String,
	score: Number
})


User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User)
