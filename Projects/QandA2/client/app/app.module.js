(function() {
	'use strict';
	console.log('got the modules loaded')
	angular
		.module('myApp',[ 
			'ngRoute',
			'app.what'
			])
		.config(configFunction)

		configFunction.$inject = ['$routeProvider'];
		function configFunction($routeProvider) {
				 $routeProvider.otherwise({
		    	redirectTo: '/'
		    });
		}
})()