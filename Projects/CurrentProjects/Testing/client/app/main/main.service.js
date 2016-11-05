(function(){
	'use strict'
	angular
	.module('myApp')
	.factory('MainFactory', MainServiceFunction)

		function MainServiceFunction($http, $q){
			var factory = {}
			return {
				getAllScores: getAllScores
			}

			function getAllScores() {
				var deferred = $q.defer();
				$http.get('/getAllScores')
				.success(function(data) {
					deferred.resolve(data)
				})
				.error(function(err) {
					deferred.resolve(err)
				})
				return deferred.promise
			}
		}
		

})()