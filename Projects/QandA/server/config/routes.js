var express = require('express'),
  routes = express.Router(),
  // passport = require('passport'),
  posts = require('../controllers/posts.js'),
  // comments = require('../controllers/comments.js'),
  User = require('../models/User.js'),
  Post = require('../models/Post.js');



routes.get('/', function(req, res) {
	res.send('hello')
})
routes.get('/hey', function(req, res) {
	res.send('HEY KYLE')
})


module.exports = routes;