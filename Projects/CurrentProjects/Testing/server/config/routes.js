var express = require('express'), //ok
	routes = express.Router(), //ok
	passport = require('passport'), //ok for now
	User = require('../models/User.js'), // ok 
	questions = require('../controllers/questions.js'); // ok

	// ------------------ Authentication Routes ------------------------


	routes.post('/user/register', function(req, res) {
	  console.log(req.body)
	  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
	    if (err) {
	      return res.status(500).json({err: err});
	    }
	    passport.authenticate('local')(req, res, function () {
	      return res.status(200).json({status: 'Registration successful!'});
	    });
	  });
	});

	routes.post('/user/login', function(req, res, next) {
	  passport.authenticate('local', function(err, user, info) {
	    if (err) {
	      return res.status(500).json({err: err});
	    }
	    if (!user) {
	      return res.status(401).json({err: info});
	    }
	    req.logIn(user, function(err) {
	      if (err) {
	        return res.status(500).json({err: 'Could not log in user'});
	      }
	      res.status(200).json({status: 'Login successful!', user: user});
	      console.log(req.user)
	    });
	  })(req, res, next);
	});

	routes.get('/userinfo', function(req, res){
	  User.find({_id: req.user._id}, function (err, data) {
	    if(err) {
	      console.log('error!!')
	    } else {
	      res.json(data)
	    }
	  })

	})

	routes.get('/user/logout', function(req, res){
	  req.logout();
	  res.status(200).json({status: 'Bye!'});
	});

	routes.get('/user/isLoggedIn', function(req, res, next) {
	  if (req.user) {
	    console.log('user is logged in')
	    res.json({message: 'user is logged in'})
	    res.end()
	  } else {
	    console.log('user is not logged in')
	  }
	})
	
	// ------------------ Application Routes ------------------------

	routes.post('/addQuestion', function(req, res) {
		questions.create(req, res)
	})
	routes.get('/getQuestions', function(req, res) {
		questions.show(req, res)
	})

	routes.post('/addAnswers', function(req, res) {
		questions.addAnswers(req, res)
	})
	routes.get('/getQuiz', function(req, res) {
		questions.getQuestions(req, res)
	})
	routes.post('/removeQuestion', function(req, res) {
		questions.remove(req,res)
	})
	routes.post('/saveScore', function(req, res) {
		questions.saveScore(req, res)
	})
	routes.get('/getAllScores', function(req, res) {
		questions.getAllScores(req, res)
	})






	module.exports = routes;