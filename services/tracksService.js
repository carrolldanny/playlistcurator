jamendoApp.service('tracksService', function($http, jamendo_values) {
	

	this.getTracks = function(selectedGenre, trackSearchOffset, callback) {
		$http.get(jamendo_values.jamendoBaseUrl + "tracks/?client_id=" + jamendo_values.jamendoClientID + "&format=jsonpretty&limit=" + jamendo_values.returnedTrackLimit + "&tags=" + selectedGenre + "&offset=" + trackSearchOffset)
				 .success(callback)
		         .error(function(x, status, error) {
		           alert(error);
 				});
	}
});


