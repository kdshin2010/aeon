(function() {
	'use strict';
	angular
		.module('app.what')
		.config(configFunction);

		function configFunction($routeProvider){
			$routeProvider.when('/posts', {
				templateUrl: 'app/waitlist/posts.html'
			});
		}
})();