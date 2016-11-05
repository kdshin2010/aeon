(function() {
	'use strict'


	angular
		.module('app.posts')
		.controller('PostsController', PostsControllerFunction)


		function PostsControllerFunction($scope) {
			$scope.hello = 'yo'
			console.log('loaded the posts controller')
		}

})()