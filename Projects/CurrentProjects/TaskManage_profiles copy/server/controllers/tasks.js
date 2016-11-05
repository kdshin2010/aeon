var mongoose = require('mongoose'),
	routes = require('../config/routes.js'),
	Task = mongoose.model('Task')
	tasks = {};


	tasks.create = function(req, res) {
		console.log(req.body)
		var task = new Task({name: req.body.name, priority: req.body.priority, deadline: req.body.deadline, created: req.body.created}, function(err) {
			if(err) {
				console.log('error')
			} else {
				console.log('successfully saved task')
			}
		})
	}

	tasks.create = function(req, res) {
		var task = new Task({name: req.body.name, priority: req.body.priority, deadline: req.body.deadline, created: req.body.created})
		task.save(function(err) {
			if (err) {
				console.log('error!')
			} else {
				console.log('success save')
			}
		})
	}



	tasks.find = function (req, res) {
		Task.find({}, function(err, results) {
			if(err) {
				console.log('could not find Tasks')
			} else {
				res.json(results)
				console.log(results)
				console.log('in the tasks')
			}
		})
	}

	tasks.remove = function(req, res) {
		Task.remove({_id: req.body.id}, function(err) {
			if(err) {
				console.log('could not remove')
			} else {
				console.log('removed!')
			}
		})
	}








	module.exports = tasks;

	
