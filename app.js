// Used for globals and Angular config settings such as routing.
var jamendoApp = angular.module('jamendoApp', ['ngRoute', 'firebase', '720kb.socialshare','ngNotify','ngCookies']);

//some constants 
//one andling user session


jamendoApp.constant('jamendo_values', {
    jamendoBaseUrl : "http://api.jamendo.com/v3.0/",
    jamendoClientID : "90be5fa3",
    returnedTrackLimit : "12"
})

//directive for toggling buttons
jamendoApp.directive('selectable', function(){
  
  var selected;
  
  var unselect = function(element) {
    element.removeClass('pause_track');
  }
  
  var select = function(element) {
    if (selected){
      unselect(selected);
      element.removeClass('pause_track');
    }
    selected = element;
    element.addClass('pause_track'); 
  }
  
  return {
    
    link : function(scope, element, attrs){
      
       element.on('click', function(){
         select(element);
       });
       
    }
  }
});

/* --- */





//directive for class changing on button toggles
jamendoApp.directive('isolate', function() {
    return {scope: true};
});

//date formatting filter
jamendoApp.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])

jamendoApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '/partials/user_login.html',
                    controller: 'UserController'
                }).
                when('/select_genre', {
                    templateUrl: '/partials/select_genre.html',
                    controller: 'GenreController'
                }).
                when('/add_tracks', {
                    templateUrl: '/partials/add_tracks.html',
                    controller: 'TrackController'
                }).
                when('/playlists', {
                    templateUrl: '/partials/playlists.html',
                    controller: 'PlaylistsController'
                }).
                when('/playlist', {
                    templateUrl: '/partials/playlist.html',
                    controller: 'PlaylistController'
                }).
                when('/edit_playlist', {
                    templateUrl: '/partials/edit_playlist.html',
                    controller: 'EditPlaylistController'
                }).                
                when('/password_reset', {
                    templateUrl: '/partials/password_reset.html',
                    controller: 'PasswordResetController'
                }).
                when('/logout', {
                    templateUrl: '/partials/logout.html',
                    controller: 'LogoutController'
                }).
                otherwise({
                    redirectTo: '#/'
                });
                //$locationProvider.html5Mode(true);
        }]);
    jamendoApp.controller("RouteController", function($scope) {

	});




