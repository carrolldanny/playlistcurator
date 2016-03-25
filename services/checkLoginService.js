jamendoApp.service('checkLoginService', function($cookies,$window) {
	

	this.checkLogin = function() {
		if (!$cookies.get("uid")) {
			$window.location.href = '#/';
		} 
	}
});


