(function(){
	'use strict'
	angular
	.module('myApp')
	.controller('QuestionCtrl', QuestionCtrlFunction)

	function QuestionCtrlFunction($scope, QuestionFactory, AuthFactory, $location){
		$scope.addQuestion = addQuestion
		$scope.questions = []
		$scope.answer = '';
		$scope.answerArray = [];
		$scope.calculate_score = calculate_score
		$scope.removeQuestion = removeQuestion
		$scope.userInformation = AuthFactory.userName();


		var score

		getQuestions();

		console.log('after userName')

		console.log(AuthFactory.isLoggedIn());
		console.log(AuthFactory.getUserStatus());


		function calculate_score() {
			score=0;
			for (var i=0; i<$scope.questions.length; i++) {
				if ($scope.questions[i].answer === 'correct') {
					score++
				}
			}
			score = score/($scope.questions.length)*100
			QuestionFactory.saveScore($scope.userInformation.user._id, score)
			$location.path('view_score')

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

		function removeQuestion(id) {
			console.log(id)
			QuestionFactory.removeQuestion(id)
			.then(function(data) {
				console.log('succssfully removed question')
			})
			.catch(function(){
				console.log('cant remove question')
			})
			getQuestions();
		}


		function getQuestions() {
			console.log('getting questions')
			QuestionFactory.getQuestions()
			.then(function(data){
				console.log(data)
				$scope.questions = data
			})
			.catch(function(){
				console.log('could not get questions in controller')
			})

		}

	}


})()