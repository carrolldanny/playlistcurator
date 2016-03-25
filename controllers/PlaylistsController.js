jamendoApp.controller('PlaylistsController', function($scope, $http, $window, playlistsService, genreService, checkLoginService, $cookies) {

	


	$scope.title = "Here are your previous playlists";
	$scope.playlistTrackIDs = [];
	$scope.interimPlaylistTrackIDs = "";
	
	$scope.init = function(){	
		//checking there is a user logged in
		checkLoginService.checkLogin(function(data) {});
		$scope.getPlaylists();
	}

	

	$scope.getPlaylists = function(){
		playlistsService.get().$loaded(function(data) {
			$scope.playlists = data;
			var i = 0
			angular.forEach($scope.playlists, function(playlist, key) {
		       angular.forEach(data[i].tracks, function(value, key) {
		          $scope.interimPlaylistTrackIDs = $scope.interimPlaylistTrackIDs + "+" + value.trackID;
		       });
		       $scope.playlistTrackIDs.push($scope.interimPlaylistTrackIDs);
		       $scope.interimPlaylistTrackIDs = "";
		      i++;
		    });
		});

		$scope.getGenres()

	};

	$scope.getGenres = function(){
			$scope.genres = genreService.getGenres();
	};

	$scope.setPlaylistNameAndNavigate = function(playlistOrder, playlistID,playlistName,playlistCurator,playlistCreated,playlistGenre) {
		$window.location.href = '#/playlist?playlistid=' + playlistID + '&playlistName=' + playlistName + '&playlistCurator=' + playlistCurator + '&playlistCreated=' + playlistCreated + '&playlistGenre=' + playlistGenre + '&playlistTrackIds=' + $scope.playlistTrackIDs[playlistOrder];
	}
	

});


		