//controller must
	//take data create new Mongoose model instance
	//call setPassword add salt and hash
	//saveinstance to DB
	//generate JWT
	//send JWT inside JSON response


var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var authenticate = {};


//uses setPassword and generateJwt in Mongoose Schema

	//omits err validation - refactor to include api tokens
authenticate.register = function(req, res) {
	var user = new User({name: req.body.name, email: req.body.email});
	user.setPassword(req.body.password);
	user.save(function(err) {
		var token;
		token = user.generateJwt();
		res.status(200);
		res.json({
			"token": token
		})
	})
}


authenticate.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
