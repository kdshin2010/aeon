(function() {
	'use strict';
	angular
		.module('myApp')
		.controller('LoginCtrl', LoginCtrl)

		LoginCtrl.$inject = ['$scope', '$location', 'AuthFactory']
		



		function LoginCtrl($scope, $location, AuthFactory) {
		    $scope.user;
		    $scope.userInfo
		    $scope.login = login
		    $scope.isLoggedIn;
		    $scope.thisCase
			$scope.logout = logout;





		    console.log('1 line before Auth Factory')
			console.log(AuthFactory.isLoggedIn());
			console.log('line after Auth Factory')

		    function login() {

		    	$scope.thisCase = true;

		      // initial values
		      $scope.error = false;
		      $scope.disabled = true;

		      AuthFactory.login($scope.user.username, $scope.user.password)
		        // handle success
		        .then(function (data) {
		          console.log(data)
		          $scope.isLoggedIn = true;
		          $scope.userInfo = data;
		          $scope.disabled = false;
		          console.log(AuthFactory.isLoggedIn());
		          $location.path('/home')
		          $scope.user = {};
		        })
		        // handle error
		        .catch(function () {
		          $scope.error = true;
		          $scope.errorMessage = "Invalid username and/or password";
		          $scope.disabled = false;
		          $scope.loginForm = {};
		       });
		    }

			function logout() {
				AuthFactory.logout()
					.then(function() {
						$scope.isLoggedIn = false;
						$location.path('/login')
						console.log(AuthFactory.isLoggedIn())
				})
			}		

		}
})();