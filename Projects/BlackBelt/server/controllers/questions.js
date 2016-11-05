var mongoose = require('mongoose'),
	routes = require('../config/routes.js'),
	Question = mongoose.model('Question'),
	User = mongoose.model('User')
	questions = {};

	questions.show = function(req, res) {
		Question.find({}, function(err, results) {
			if(err) {
				console.log('could not find questions')
			} else {
				res.json(results)
				console.log(results)
				console.log('succesfully got questions')
			}
		})
	}

	questions.create = function(req, res) {
		var question = new Question({question: req.body.question, correct: req.body.correct, fake1: req.body.fake1, fake2: req.body.fake2})
		question.save(function(err) {
			if(err) {
				console.log('error saving questions')
			} else {
				console.log('successfully saved questions')
			}
		})
	}


	module.exports = questions;
