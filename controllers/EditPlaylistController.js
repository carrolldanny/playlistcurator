jamendoApp.controller('EditPlaylistController', function($scope, $location, $filter, $cookies, playlistService, tracksService, checkLoginService, genreService, $window, $firebaseArray, $firebaseObject) {

	
	
	var urlParamaters = $location.search();
	$scope.selectedPlaylist = urlParamaters.playlistid;
	///$scope.title = "Editing";
	$scope.selectedPlaylist = urlParamaters.playlistid;
	$scope.title = "Edit : " + urlParamaters.playlistName;
	$scope.playlistCurator = urlParamaters.playlistCurator;
	$scope.playlistCreated = urlParamaters.playlistCreated;
	$scope.playlistGenre = urlParamaters.playlistGenre;
	$scope.playlistTrackIds = urlParamaters.playlistTrackIds;
	$scope.currentlyPlayingTrack = 0;
	$scope.currentlyPlayingTrackID = "";
	

	$scope.init = function() {
		//checking there is a user logged in
		checkLoginService.checkLogin(function(data) {});
		$scope.getTracks();
		$scope.getNewTracks();
		//$scope.getGenreImage();
	}



	$scope.removeFromPlaylist = function(trackID){	
		//remove from $scope.tracks
		//console.log($scope.tracks);

		//refine this looping if possible - filter perhaps
		for(var i=0; i< $scope.tracks.length; i++){
		 	//remove if from the $scope
		 	if(trackID == $scope.tracks[i].id) {
		 		$scope.tracks.splice(i, 1);
		 	}

		}
		
		var ref = new Firebase('https://glaring-inferno-6359.firebaseio.com/' + uid + '/playlists/' + $scope.selectedPlaylist + '/tracks');
		var playlist = $firebaseArray(ref);
		
		var i = 0
		playlist.forEach(function(item){
           console.log(item.key);  
       	})
		  
			//remove it from Firebase
		 	//var listRef = new Firebase("https://glaring-inferno-6359.firebaseio.com/playlists/" + $scope.selectedPlaylist + "/tracks/" + trackKeyId);
			//listRef.remove();  
			//get the tracks, find the key, then remove
			
			
			//for(var i=0; i< playlist.length; i++){
		 		//$scope.tracks.splice(i, 1);
		 	//}
		//console.log($scope.tracks.length);
	}



	$scope.getTracks = function() {
		
		

    	playlistService.getTracks($scope.playlistTrackIds, function(data) {
		            if(data.headers.status == 'success') {
		              $scope.tracks = data.results;
		            }
		            else {
		              alert("Error - " + data.headers.error_message);
		            }
		         });

    	
    }

    $scope.getNewTracks = function() {
		

    	tracksService.getTracks("Jazz", 12, function(data) {
		            if(data.headers.status == 'success') {
		              //randomize the data order
		              $scope.newtracks = data.results;
		              //$scope.trackSearchOffset = $scope.trackSearchOffset + $scope.returnTrackLimit;
		            }
		            else {
		              alert("Error - " + data.headers.error_message);
		            }
		         });
    	
    }

    


});


