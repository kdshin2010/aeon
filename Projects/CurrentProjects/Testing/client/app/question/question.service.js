(function(){
	'use strict'
	angular
	.module('myApp')
	.factory('QuestionFactory', QuestionFactoryFunction)

		function QuestionFactoryFunction($http, $q){
			var factory = {}
			var playerScore;;
			var questions;
			return {
				addQuestion: addQuestion,
				getQuestions: getQuestions,
				getQuiz: getQuiz,
				removeQuestion: removeQuestion,
				getScore: getScore,
				saveScore: saveScore
			}
			//, correct: info.correct, fake1: info.fake1, fake2: info.fake2})



			function saveScore(id, score) {
				console.log(id)
				console.log(score)
				console.log(playerScore)
				playerScore = score;
				var deferred = $q.defer();
				$http.post('/saveScore', {id: id, score:score})
				.success(function(data) {
					console.log(data)
				})
				.error(function(){
					console.log('could not save score in the ervice')
				})
	

			}

			function getScore() {
				console.log(playerScore)
				return playerScore
			}


			function addQuestion(info) {
				var deferred = $q.defer();
				$http.post('/addQuestion', {question:info.question, correct: info.correct, fake1: info.fake1, fake2: info.fake2})
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
					questions = data;
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

			function removeQuestion(id) {
				var deferred = $q.defer();
				$http.post('/removeQuestion', {id: id})
				.success(function(data) {
					console.log('in the service and so for so good removing question')
				})
				.error(function(){
					console.log('in the service and error removeing questin')
				})
				return deferred.promise
			}

			function getQuiz() {
				var deferred = $q.defer();
				$http.get('/getQuiz')
				.success(function(data) {
					console.log(data)
					console.log('in the factory')
					deferred.resolve(data)
				})
				.error(function(){
					console.log('error!')
					deferred.reject()
				})
				return deferred.promise
			}

		}
})()