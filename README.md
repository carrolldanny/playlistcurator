#Assignment 1 - AngularJS app.

Name: Danny Carroll

###Overview.
Playlist Curator allows the user to create and stream Genre-based lists of music and share them with others. The source of the music is a service called Jamendo. Jamendo is a music website and an open community of independent artists and music lovers. It bills itself as "the world's largest digital service for free music. Jamendo has an API allowing developers to consume their freely available content.

www.jamendo.com

Playlist Curator lets the user select the genre of music they wish to based their playlist on. A selection of songs are returned for the user to peruse. These can be previewed and if the user likes the song, they can add it to the list. If the user changes their mind, it can then be removed. If the user has heard enough of the songs that are presented to them, then can load up some more and keep building the list.

At any time, the user can visit the lists they have created and enjoy them. They can also share them with their friends on social media so others can enjoy the music. 

Because the Jamendo music service is populated only by new, unsigned and unpublicized music creators, users are bound to discover some new talent using Playlist Curator. This is why the playlists’ starting point is the genre type.

 
 + Consumes Jamendo music providers data API
 + Streams Jamendo music providers music files
 + Creates playlists in Firebase as music provider's API doesn't have facilitiy to dynamically create a playlist
 + Shares playlist via users social media accounts
 

###Installation requirements.

+ AngularJS 1.4.5
+ Bootstrap 3.1.1
+ Firebase
+ Angular Socialshare
+ Angular Notifications


To get this project up and running, clone it, start your webserver in the playlistcurator folder (where you see the index.html file). Then in your favorite browser, visit :

localhost:8080/#/

and you should see the login page. The localhost IP address (127.0.0.1) will also work, however one of the features of Playlst curator uses Google's URL sortening service for sharing out the URL of the playlist you have created. This has proven problematic to this developer when using this - however localhost works fine.

###Data Model Design.

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

###App Design.

![][image2]

###UI Design.

Starting the playlist creation process - just pick the genre you want
![][image3]

Adding songs to the list - give them a quick listen, remove them if you change your mind
![][image4]

Previous created playlists
![][image5]

Playing back a list and sharing it on Twitter
![][image6]

###Routing.

+ / - Login page
+ /password_reset - Allows user to trigger password reset - email sent to their registered address
+ /logout - ends user's playlist creation session
+ /select_genre - the start of the playlist creation process - pick the style you want
+ /add_tracks - preview and add some music to your list, as many songs as you like
+ /playlists - a list of the playlists you have created so far
+ /playlist - the particular playlist you have selected to playback/share
+ /edit_playlist - make changes to a previously created playlist (not complete - ran out of time)

###Extra features

Firebase was used for user accounts and authentication, however since the Jamendo API lacks the functionality to dynamically create playlists - Playlist Curator creates playlists in Firebase also. It uses the users UID to identify the lists associated with them - then it holds some basic playlist info such as create date, genre, title, curator as well as each Jamendo track ID who’s details are then accessed from the Jamendo API.

Google URL shortener is used to shorten the URL's before they get shared out on Social Media (Only Twitter implemented as I don’t have a Facebook account to test that one, but the implementation is the same - just properties on the link)


###Independent learning.

+ ngCookies - I used this to store the uid of the logged in user so their previous playlists can be retrieved easily. It gets destroyed when they logout
+ ngNotify - This is used when a track is added or removed from a playlist - different classes demoting different action as are applied.
+ Angular Social Sharing - For sharing the created playlists with friends.
+ HTML5 Audio Player - standard feature of HTML5 but few soild for streaming audio files in an instance such as this.

[image1]: http://dancar38.100webcustomers.com/screenshots/data.png
[image2]: http://dancar38.100webcustomers.com/screenshots/diag1.png
[image3]: http://dancar38.100webcustomers.com/screenshots/create_playlist.png
[image4]: http://dancar38.100webcustomers.com/screenshots/creating_list.png
[image5]: http://dancar38.100webcustomers.com/screenshots/your_playlists.png
[image6]: http://dancar38.100webcustomers.com/screenshots/share_playlist.png

