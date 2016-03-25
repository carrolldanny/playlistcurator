jamendoApp.controller('GenreController', function($scope, genreService, $window, checkLoginService) {

	
		   
		   	/*$scope.randomSort = function(question) {
              return Math.random();
            };*/

            $scope.title = "Select a Genre for your playlist"
			
			
			$scope.init = function(){
					//checking there is a user logged in
					checkLoginService.checkLogin(function(data) {});
					$scope.getGenres();
			};

			$scope.getGenres = function(){
					$scope.genres = genreService.getGenres();
			};

			
});






