jamendoApp.controller('UserController', function($scope, $http , $location, $firebaseArray, $window, ngNotify, $cookies) {


	$scope.title = "Login to Playlist Curator";
	
	$scope.userLogin = function() {

		var ref = new Firebase("https://glaring-inferno-6359.firebaseio.com");
		ref.authWithPassword({
	  		email    : $scope.user.email,
	  		password : $scope.user.password
		}, function(error, authData) {
	  	if (error) {
	    	ngNotify.set("Login error has occured", "error");
	  	} else {
	  		//store session
	  		$cookies.put("uid", authData.uid); 
	    	$window.location.href = '#/select_genre'; 
	  	}
		});
	}

	$scope.resetPassword = function() {
		var ref = new Firebase("https://glaring-inferno-6359.firebaseio.com");
		ref.resetPassword({
		  email : "dandare@eircom.net"
		}, function(error) {
		  if (error === null) {
		    console.log("Password reset email sent successfully");
		  } else {
		    console.log("Error sending password reset email:", error);
		  }
		});
	}

});