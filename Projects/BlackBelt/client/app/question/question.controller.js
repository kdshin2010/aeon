(function(){
	'use strict'
	angular
	.module('myApp')
	.controller('QuestionCtrl', QuestionCtrlFunction)

	function QuestionCtrlFunction($scope, QuestionFactory, AuthFactory){
		$scope.addQuestion = addQuestion
		$scope.questions = []
		$scope.checkAnswer = checkAnswer
		$scope.answer = '';
		$scope.newAnswerA, $scope.newAnswerB, $scope.newAnswerC
		$scope.testing
		$scope.answerArray = [];
		$scope.random = random


		getQuestions();
		setTimeout(function(){ console.log($scope.questions)}, 3000)
		getData();
		console.log(QuestionFactory.testing())

		function getData() {
			QuestionFactory.testing(function(data) {
				console.log(data)
				data = $scope.testing
			})
		}
		function random() {
			return 0.5 - Math.random()
		}


		function addQuestion() {
			QuestionFactory.addQuestion({question: $scope.newQuestion.question, correct: $scope.newQuestion.correct, fake1: $scope.newQuestion.fake1, fake2: $scope.newQuestion.fake2})
			.then(function(data) {
				console.log(data)
				alert('successfuly added question')
			})
			.catch(function(){
				console.log('error')
			})
			$scope.newQuestion = {}
			getQuestions();
		}

		function getQuestions() {
			QuestionFactory.getQuestions()
			.then(function(data){
				$scope.questions = data
			})
			.catch(function(){
				console.log('could not get questions in controller')
			})

		}

		function checkAnswer(answer) {
			console.log(answer)
			var right = [];
			console.log($scope.newAnswerA);
			console.log($scope.newAnswerB)
			console.log($scope.newAnswerC)

		}

	}


})()