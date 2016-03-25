jamendoApp.controller('PasswordResetController', function($scope, $http , $location, $firebaseArray, $window, ngNotify) {

	$scope.title = "Reset your Password";
	


	$scope.resetPassword = function() {
		var ref = new Firebase("https://glaring-inferno-6359.firebaseio.com");
		ref.resetPassword({
		  email : $scope.emailToReset
		}, function(error) {
		  if (error === null) {
		  	ngNotify.set("Password has been reset - please check your email", "success");
		    $window.location.href = '#/'; 
		  } else {
		    ngNotify.set("error resetting password", "error");
		  }
		});
	}

});


