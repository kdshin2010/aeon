var express = require('express'),
	cookieParser = require('cookie-parser'),
	path = require('path'),
	bodyParser = require('body-parser');

//Insert Models here eg Var User require USer
require('./server/config/mongoose.js')

var routes = require('./server/config/routes.js')


//invoke express
var app = express();

//middleware
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes)

app.listen('8823', function() {
	console.log('8823')
});