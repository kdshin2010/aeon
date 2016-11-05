var express = require('express'), //ok
	routes = express.Router(), //ok
	passport = require('passport'), //ok for now
	User = require('../models/User.js'), // ok 
	tasks = require('../controllers/tasks.js'); // ok



	routes.get('/getTasks', function(req, res) {
		tasks.find(req, res)
	})

	routes.post('/addTask', function(req, res){
		tasks.create(req, res)
	})

	routes.post('/removeTask', function(req, res) {
		tasks.remove(req,res)
	})









	module.exports = routes;