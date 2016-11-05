var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

//require conifg because config makes reference to model
require('./app_api/models/db');
require('./app_api/config/passport');

//initialize Passport before API because passport will utilize these routes
app.use(passport.initialize());
app.use('/api', routesApi);

//Configure API endpoints
	//make controllers functional
	//secure /api/profile so only authenticaed users can access

//require passport, mongoose, and User in app_api/controllers/auth....





// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});