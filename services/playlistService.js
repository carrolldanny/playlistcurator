
jamendoApp.service('playlistService', function($http,$firebaseArray, $firebaseObject) {
	var baseUrl = "http://api.jamendo.com/v3.0/";
	var clientID = "90be5fa3";
	var returnedTrackLimit = "12";
	var trackIDs = "";
	
	
	var _this = this;

	var jamendoBaseUrl = "http://api.jamendo.com/v3.0/";
	var jamendoClientID = "90be5fa3";

  	this.getTrackIDs = function(playlistID){
			var ref = new Firebase('https://glaring-inferno-6359.firebaseio.com/playlists/' + playlistID + '/tracks');
			var playlist = $firebaseArray(ref);
			return playlist;

	};
	
	this.getTracks = function(trackIDs, callback) {

		$http.get(baseUrl + "tracks/?client_id=" + clientID + "&format=jsonpretty&id=" + trackIDs)
				 .success(callback)
		         .error(function(x, status, error) {
		           alert(error);
 				});
	}
});

