(function() {
	'use strict';
	console.log('here got the module')
	angular
		.module('myApp', [
			'ngRoute',
			'app.posts'

			])
		.config(configFunction)


		configFunction.$inject = ['$routeProvider'];
		
		function configFunction($routeProvider) {
			$routeProvider.when({
				templateUrl: 'app/posts/posts.html'
			});
		}
})()
