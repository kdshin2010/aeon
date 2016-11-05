//We only want people to view own profiles
//get user ID fro mJWT use it for a Mongosoe Query

var mongoose = require('mongoose');
var User = mongoose.model('User');

var profiles = {};

profiles.profileRead = function(req, res) {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
      	//err callback
        res.status(200).json(user);
      });
  }

};




module.exports = profiles;