//Service can handle
	//saving JWT from local storage
	//Reading JWT from local storage
	//Deleting JWT from local storage
	//calling register and login API end points
	//checking if user is logged in
	//getting deatils of logged in user from JWT

//localStorage (browswer method) saves JWT
	//use localStorage pass $window

(function () {

  angular
    .module('meanApp')
    .service('authentication', authentication);

  authentication.$inject = ['$http', '$window'];
  function authentication ($http, $window) {

    var saveToken = function (token) {
      $window.localStorage['mean-token'] = token;
    };

    var getToken = function () {
      return $window.localStorage['mean-token'];
    };

   	logout = function() {
      $window.localStorage.removeItem('mean-token');
    };

	var isLoggedIn = function() {
	  var token = getToken();
	  var payload;

	  if(token){
	    payload = token.split('.')[1];
	    payload = $window.atob(payload);
	    payload = JSON.parse(payload);

	    return payload.exp > Date.now() / 1000;
	  } else {
	    return false;
	  }
	};
	var currentUser = function() {
	  if(isLoggedIn()){
	    var token = getToken();
	    var payload = token.split('.')[1];
	    payload = $window.atob(payload);
	    payload = JSON.parse(payload);
	    return {
	      email : payload.email,
	      name : payload.name
	    };
	  }
	};

	login = function(user) {
	  return $http.post('/api/login', user).success(function(data) {
	    saveToken(data.token);
	  });
	};
	
	register = function(user) {
	  return $http.post('/api/register', user).success(function(data){
	    saveToken(data.token);
	  });
	};

    return {
      saveToken : saveToken,
      getToken : getToken,
      logout : logout,
      isLoggedIn: isLoggedIn
    };
  }

})();