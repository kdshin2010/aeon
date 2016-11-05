(function(){
	'use strict'
	angular
	.module('myApp')
	.factory('QuestionFactory', QuestionFactoryFunction)

		function QuestionFactoryFunction($http, $q){
			var factory = {}
			return {
				addQuestion: addQuestion,
				getQuestions: getQuestions,
				testing: testing
			}

			var testdata = [1,2,3,4,7,8];
			var yo = 'hello'

			function testing () {
				console.log(yo)
			}

			function addQuestion(info) {
				var deferred = $q.defer();
				$http.post('/addQuestion', {question: info.question, correct: info.correct, fake1: info.fake1, fake2: info.fake2})
				.success(function(data) {
					console.log(data)
					console.log('in the service')
					deferred.resolve(data)
				})
				.error(function() {
					console.log('error saving questions')
				})
				return deferred.promise
			}

			function getQuestions() {
				var deferred = $q.defer();
				$http.get('/getQuestions')
				.success(function(data) {
					deferred.resolve(data)
				})
				.error(function(){
					console.log('could not get questioons')
				})
				return deferred.promise
			}

			function checkQuestions() {
				console.log($scope.newAnswer)
			}
		}
})()