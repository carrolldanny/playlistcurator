jamendoApp.controller('PlaylistController', function($scope, $http, $location, $filter, playlistService, genreService, $window, $document) {

	
	
	var urlParamaters = $location.search();
	//$scope.stateOfPlay = "play_track";
	$scope.selectedPlaylist = urlParamaters.playlistid;
	$scope.title = urlParamaters.playlistName;
	$scope.playlistCurator = urlParamaters.playlistCurator;
	$scope.playlistCreated = urlParamaters.playlistCreated;
	$scope.playlistGenre = urlParamaters.playlistGenre;
	$scope.playlistTrackIds = urlParamaters.playlistTrackIds;
	$scope.currentlyPlayingTrack = 0;
	$scope.currentlyPlayingTrackID = "";
	$scope.currentPathToShare = ""; 
	

	$scope.init = function() {
		$scope.getTracks();
		$scope.getGenreImage();
		$scope.shortenURL();
	}


	    
	$scope.getGenreImage = function(){
			//$scope.genreImage = genreService.getGenres();
			$scope.genreImage =  $filter('filter')(genreService.getGenres(), { name: $scope.playlistGenre });
			$scope.genreImageDisplay = $scope.genreImage[0].image;
	};

	$scope.getTracks = function() {
    	playlistService.getTracks($scope.playlistTrackIds, function(data) {

		            if(data.headers.status == 'success') {
		              $scope.tracks = data.results;
		              $scope.controlTrack(data.results[0].id,0); 
		            }
		            else {
		              alert("Error - " + data.headers.error_message);
		            }
		         });
    }

    $scope.shortenURL = function() {
    	//console.log('shortening');
    	//goo.gl url shortener is not shortening url's of 127.0.0.1 or 10.37.3.141
    	//but will work with localhost
    	//not sure why but for the purposes of this project i wont be investigating it any further

    	var urlToShorten = $location.absUrl();
		var googleAPIKey = 'AIzaSyDi0YhHKAi3ybMLY8ElUWH6JFKPTas_VvU';
		var googleShortenerUrl = 'https://www.googleapis.com/urlshortener/v1/url/?key=' + googleAPIKey;
		$http.post(googleShortenerUrl, {longUrl: urlToShorten}).success(function (resp){
			$scope.currentPathToShare = resp.id;
			return resp.id;
		});
    }



    $scope.controlTrack = function(trackID, trackSequence) {


    	$scope.currentlyPlayingTrack = trackSequence;

    	var audio = document.getElementById("currentTrack");
    	if (audio.duration > 0 && !audio.paused && $scope.currentlyPlayingTrackID == trackID) {
			audio.pause();
		} else if ($scope.currentlyPlayingTrackID == trackID && !audio.paused) {
			audio.src="https://mp3l.jamendo.com//?trackid=" + trackID + "&format=mp31&from=app-90be5fa3";
		    audio.play();
		    $scope.currentlyPlayingTrackID = trackID;
		} else if ($scope.currentlyPlayingTrackID == trackID && audio.paused) {
			audio.play();
		} else {
			audio.src="https://mp3l.jamendo.com//?trackid=" + trackID + "&format=mp31&from=app-90be5fa3";
		    audio.play();
		    $scope.currentlyPlayingTrackID = trackID;
		}
		
		$scope.selected = trackSequence; 
	};

	$scope.editPlaylist = function()
	{
	    $location.path('/edit_playlist'); // path not hash
	};



});


