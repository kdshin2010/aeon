(function(){
	'use strict'
	angular
	.module('myApp',['ngRoute'])
	.config(ConfigFunction)
	.run(RunFunction)

	//config function
	function ConfigFunction($routeProvider) {
	   $routeProvider.
	   when('/', {
	     templateUrl: 'views/Register.html',
	     access: {restricted: false}
	   }).
	   when('/register', {
	     templateUrl: 'views/Register.html',
	     access: {restricted: false}
	  }).
	   when('/login', {
	     templateUrl: 'views/Login.html',
	     access: {restricted: false}
	  }).
	   when('/home', {
	     templateUrl: 'views/home.html',
	     access: {restricted: false}
	  }).
	   when('/play', {
	     templateUrl: 'views/play.html',
	     access: {restricted: false}
	  }).
	   when('/questions', {
	     templateUrl: 'views/question.html',
	     access: {restricted: false}
	  }).
	   when('/view_score', {
	     templateUrl: 'views/view_score.html',
	     access: {restricted: false}
	  }).
	   otherwise({
      	 redirectTo: '/login'
	   })
	}
    function RunFunction($rootScope, $location, $route, AuthFactory) {
      $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
          AuthFactory.getUserStatus();
          if (next.access.restricted &&
              !AuthFactory.isLoggedIn()) {
            $location.path('/login');
            $route.reload();
          }
      });
    }

})();