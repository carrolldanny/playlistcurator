jamendoApp.service('genreService', function($http) {
	

	this.getGenres = function() {

		var genres = [{name : 'Rock', image:'./images/genre_images/rock.jpg'},
		   					{name : 'Pop', image:'./images/genre_images/pop.jpg'},
		   					{name : 'Indie', image:'./images/genre_images/indie.jpg'},
		   					{name : 'Jazz', image:'./images/genre_images/jazz.jpg'},
		   					{name : 'Folk', image:'./images/genre_images/folk.jpg'},
		   					{name : 'Dance', image:'./images/genre_images/dance.jpg'},
		   					{name : 'Reggae', image:'./images/genre_images/reggae.jpg'},
		   					{name : 'Punk', image:'./images/genre_images/punk.jpg'},
		   					{name : 'Hip Hop', image:'./images/genre_images/hip_hop.jpg'},
		   					{name : 'Country', image:'./images/genre_images/country.jpg'},
		   					{name : 'Blues', image:'./images/genre_images/blues.jpg'},
		   					{name : 'Classical', image:'./images/genre_images/classical.jpg'}];

		return genres;
	}
});


