jamendoApp.controller('TrackController', function($scope, $cookies ,$http , $location, $document, $sce, $filter,  $firebaseArray, $firebaseObject, $window, tracksService, ngNotify, checkLoginService) {

	
  	

	var urlParamaters = $location.search();
	var selectedGenre = urlParamaters.selectedgenre;
	var newPlayList = "";
	var addButtonToggled = false;

	var firebaseKey="";

	$scope.title = "Add tracks to your list";
	
	$scope.trackSearchOffset = 0;
	$scope.returnTrackLimit = 12;
	$scope.playlistCreated = false;
	$scope.playlistName = false;
	$scope.selectedTrackClass = "overlay";  //
	
	//$scope.trackListSongIDs =   [];	

	

	$scope.init = function() {
		//checking there is a user logged in
		checkLoginService.checkLogin(function(data) {});
		$scope.getTracks();
	}

	

    $scope.getTracks = function() {
		

    	tracksService.getTracks(selectedGenre, $scope.trackSearchOffset, function(data) {
		            if(data.headers.status == 'success') {
		              //randomize the data order

		              $scope.tracks = data.results;
		              $scope.trackSearchOffset = $scope.trackSearchOffset + $scope.returnTrackLimit;
		            }
		            else {
		              alert("Error - " + data.headers.error_message);
		            }
		         });
    	
    }
	
	$scope.clearPlayState = function() {
		//stop player
		var audio = document.getElementById("audioPreview");
		audio.pause();

		//reset all pause buttons to play state
		for (i = 0; i < $scope.returnTrackLimit; i++) { 
    		var elementID = 'playTrack_' + i;		
    		var queryResult = $document[0].getElementById(elementID);
	    	var wrappedID = angular.element(queryResult);
	    	wrappedID.addClass('play_track'); 
	    	wrappedID.removeClass('pause_track'); 
		}
	}

	$scope.controlTrack = function(trackID,sequenceID) {
		
		var audio = document.getElementById("audioPreview");

		var elementID = 'playTrack_' + sequenceID;		
		var queryResult = $document[0].getElementById(elementID);
	    var wrappedID = angular.element(queryResult);
	    var existingClassName = wrappedID[0].className;

		
		//check the buttons state and player state to decide what we do on button click - 
		//we either start a new track or stop a playing one
		if(!audio.paused && existingClassName == "pause_track") {
			wrappedID.addClass('play_track'); 
	    	wrappedID.removeClass('pause_track'); 
			audio.pause();	
		} else {

			$scope.clearPlayState();

	    	audio.src="http://mp3l.jamendo.com/?trackid="+trackID+"&format=mp31&u=0";
	    	wrappedID.addClass('pause_track'); 
	    	wrappedID.removeClass('play_track'); 
	    	audio.play(); 
		}
		
		
	};


	$scope.createPlayList = function() {
		//console.log('creating playlist');

		$scope.playlistCreated = true;

		newPlayList = $scope.createPlaylistID(); 
	    var profileRef = new Firebase("https://glaring-inferno-6359.firebaseio.com/" + $cookies.get("uid") + "/playlists/" + newPlayList);
	    profileRef.set({ playlistName : $scope.createPlaylistName(),
	    				 playlistCreated : $scope.getTimeStamp(),
	    				 playlistCurator : 'Danny Carroll',
	    				 playlistGenre : selectedGenre,
	    				 tracks : []
	    				}, function(error) {
	      if (error) {
	        console.log("Error:", error);
	      } else {
	        console.log("Playlist created successfully!");
	      }
	    });
  

	 


		//write detail to firebase - then carry on with adding tracks etc.

	};

	$scope.getPlaylistTracks = function() {
		var playlistName = urlParamaters.playlistName;

    	playlistsService.getTracks(playlistName, function(data) {
		            if(data.headers.status == 'success') {
		              $scope.tracks = data.results;
		            }
		            else {
		              alert("Error - " + data.headers.error_message);
		            }
		         });
    }



	$scope.toggle = function (trackID, trackImage, trackName, trackArtistName,sequenceID, event) {
	  	
	  var deleteTrackID = event.target.attributes[3].nodeValue;
	  //console.log(deleteTrackID);

	  if(deleteTrackID) {
		$scope.removeTrackFromList(trackID, trackImage, trackName, trackArtistName,sequenceID, deleteTrackID);

	  } else {
	  	$scope.addTrackToList(trackID, trackImage, trackName, trackArtistName,sequenceID);
	  }
	}

	$scope.addTrackToList = function(trackID, trackImage, trackName, trackArtistName,sequenceID) {

		
		
		if ($scope.playlistCreated == false) {
			$scope.createPlayList();
		}

		var listRef = new Firebase("https://glaring-inferno-6359.firebaseio.com/" + $cookies.get("uid") + "/playlists/" + newPlayList + "/tracks/");
		listRef.push({  trackID });  //odd key names

		var key;
		listRef.on('value', function(snapshot) {
		      snapshot.forEach(function(childSnapshot) {
		    	//get last key and write it back ot the control
			    key = childSnapshot.key();
			  });
		});
		
		//angular.element(document.querySelector("#addTrack_0")).text(key);

		var clickedButton = angular.element(document.querySelector("#addTrack_" + sequenceID));
		clickedButton.attr("data-track-auto-key", key);  //trackKeyId
		
		ngNotify.set(trackName + " by " +  trackArtistName + " has been added to your list.", "success");
	};

			   
	$scope.removeTrackFromList = function(trackID, trackImage, trackName, trackArtistName, sequenceID,trackKeyId) {

		var listRef = new Firebase("https://glaring-inferno-6359.firebaseio.com/" + $cookies.get("uid") + "/playlists/" + newPlayList + "/tracks/" + trackKeyId);

		listRef.remove();  

		var clickedButton = angular.element(document.querySelector("#addTrack_" + sequenceID));
		clickedButton.attr("data-track-auto-key", '');  
		
		ngNotify.set(trackName + " by " +  trackArtistName + " has been removed from your list.","error");
		
	};
	
	$scope.createPlaylistID = function() {
	    var d = new Date().getTime();
	    if(window.performance && typeof window.performance.now === "function"){
	        d += performance.now();; //use high-precision timer if available
	    }
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	};

	$scope.getTimeStamp = function() {
	    var d = new Date().getTime();
	    return d;
	};
	
	$scope.createPlaylistName = function() {
	  
	  var words = ["Rockin", "Swingin", "Chilled", "Lively", "Nu-age", "Hipster", "Funky", "Blusey", "Progressive", "Up-tempo"];
	  var word = words[Math.floor(Math.random() * words.length)];
	  
	  var currentDate = $filter('date')(new Date(),'MMM dd, yyyy');

	  var playlistName = word + " " + selectedGenre + " Playlist " + currentDate; 

	  //set the title of the page to the newly created playlist name
	  $scope.title = playlistName;
	  return playlistName;
	};

	

});


