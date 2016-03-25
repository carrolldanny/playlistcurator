jamendoApp.controller('LogoutController', function($scope, $location, $cookies) {


	$scope.logout = function() {
    	//Session.clear();
    	console.log('ssssssssss dan');
    	$cookies.remove("uid");
    	$location.path('/');
	}

});