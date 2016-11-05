(function(){
	'use strict'
	angular
	.module('myApp')
	.controller('MainCtrl', MainCtrlFunction)

	function MainCtrlFunction($scope, MainFactory, $location, QuestionFactory, AuthFactory){
		$scope.userInformation = AuthFactory.userName();
		$scope.viewmodel = 'hello'
		$scope.score = QuestionFactory.getScore();
		$scope.play = play
		$scope.allScores;
		$scope.main_page = main_page
		console.log($scope.score);

		getAllScores();

		function play() {
			console.log('ready to paly')
			$location.path('play');
		}

		function main_page() {
			console.log('lets view the scores')
			$location.path('home');
			getAllScores();
			console.log($scope.allScores)
		}

		function getAllScores() {
			console.log('getting Scores in the controller')
			MainFactory.getAllScores()
			.then(function(data) {
				console.log(data)
				$scope.allScores = data;
			})
			.catch(function() {
				console.log('in the controller and could not get the scores')
			})
		}

	}



})()