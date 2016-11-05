//securing API route
	//ensure only authenticated users can access api/profile
		//validate request to ensure JWT sent is valid
		//npm express-jwt --save
		//require and configure in routes

/* DON QUITE UNDERSTAND
Then we need to require it and configure it in the file where 
/the routes are defined; in the sample application this is
/app_api/routes/index.js. Configuration is a case of telling
it the secret, and – optionally – the name of the property to 
create on the req object that will hold the JWT. We’ll be able 
to use this property inside the controller associated to the 
route. The default name for the property is user, but this is 
the name of an instance of our Mongoose User model, so we’ll
set it to payload to avoid confusion.
*/
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

// DO NOT INCLUDE SECRET IN THE CODE

router.get('/profile', auth, ctrlProfile.profileRead);


