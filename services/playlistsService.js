
jamendoApp.service('playlistsService', function($firebaseArray, $firebaseObject, $cookies) {
  
  	var _this = this;
  	var uid = $cookies.get("uid");
  	this.get = function(){
     
			var ref = new Firebase("https://glaring-inferno-6359.firebaseio.com/" + uid + "/playlists/");
			var playlists = $firebaseArray(ref);
			
			return playlists;
	};
});
