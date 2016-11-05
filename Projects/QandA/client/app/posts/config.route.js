(function() {
	'use strict'
	console.log('here in the conif route')
	angular
		.module('app.posts')
		.config(configFunction);

		configFunction.$inject = ['$routeProvider'];

		// function configFunction($routeProvider) {
		// 	$routeProvider.when('/', {
		// 		templateUrl: 'app/posts/test.html',
		// 		controller: 'PostsController',
		// 		controllerAs: 'vm'
		// 	})
		
	  function configFunction($routeProvider) {
	    $routeProvider.when('/', {
	      templateUrl: 'app/posts/test.html'
	    });
	    $routeProvider.when('/posts', {
	      templateUrl: 'app/posts/post.html'
	    });
	  }
})()