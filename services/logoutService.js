jamendoApp.service('logoutService', function(AUTH_EVENTS) {
	

	this.logout = function() {
		AUTH_EVENTS.uid = "";
	}
});


