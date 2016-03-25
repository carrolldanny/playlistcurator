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



. . . . . . Also, explain (to a third party) what steps one must take to run your app after cloning it from the repository, e.g. any non-standard software installation ; any environment setup; how to start app; where to view app in browser . . . . . . . 

To get this project up and running, clone it, start your webserver in the playlistcurator folder (where you see the index.html file). Then in your favorite browser, visit :

localhost:8080/#/

and you should see the login page. The localhost IP address (127.0.0.1) will also work, however one of the features of Playlst curator uses Google's URL sortening service for sharing out the URL of the playlist you have created. This has proven problematic to this developer when using this - however localhost works fine.

###Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

###App Design.

A simple diagram showing the app's component design, in particular controllers and services (see example below).

![][image2]

###UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (excluding user regeneration and login views) . . . . . . . 

![][image3]

###Routing.

. . . . List each route supported and state the associated view . . . . . 
+ /foos - displays all published foos
+ /foos/:id - detail view of a particular foo (:id)
+ etc
+ etc

###Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

###Independent learning.

. . . . . State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  

[image1]: ./model.png
[image2]: ./design.png
[image3]: ./screen.png
