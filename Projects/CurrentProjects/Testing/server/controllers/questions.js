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
				console.log('succesfully got questions')
			}
		})
	}

	questions.create = function(req, res) {
		var question = new Question({question: req.body.question, correct: req.body.correct, fake1: req.body.fake1, fake2: req.body.fake2})
		question.save(function(err) {
			if(err) {
				console.log('error saving question!')
			} else {
				console.log('succesfully saved question to the db')
			}
		})
	}

	questions.remove = function(req, res) {
		console.log(req.body.id)
		console.log('in the server controller and requestion the id ')
		Question.remove({_id: req.body.id}, function(err) {
			if(err) {
				console.log(err)
			} else {
				console.log('successfully removed question')
			}
		})
	}

	// questions.saveScore = function(req, res) {
	// 	User.findByIdAndUpdate(req.body.id, {set: {score: req.body.score}}, function(err, data) {
	// 		if(err) {
	// 			console.log('error update saveSCore')
	// 		} else {
	// 			console.log('success adding score to user!')
	// 			console.log(data)
	// 		}
	// 	})
	// }

	questions.saveScore = function(req, res) {
		User.findOne({_id: req.body.id}, function(err, result) {
			if(err) {
				console.log('error getting user')
			} else {
				result.score = req.body.score
				result.save(function(err) {
					if(err) {
						console.log('error')
					} else {
						console.log('saved the score yo')
					}
				})
			}
		})
	}

	questions.getAllScores = function(req, res) {
		User.find({}, function(err, result) {
			if(err) {
				console.log('error!')
			} else {
				console.log(result);
				res.json(result)
			}
		})
	}





	module.exports = questions;
