require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require("node-spotify-api");

var moment = require('moment');
moment().format();

var liriCommand = process.argv.slice(2).join(" ");
//var movieTitle = process.argv.slice(3).join(" ").slice(4); (This is my sole  error, a failed attempt at linking the movie title to the user's selection via the command line.)

if (liriCommand === "concert-this") {
    var artist = "Eminem";
    //var artist = process.argv.slice(2).join(" "); This is the issue I'm having. I can't yet figure out how to make it so user commands can be entered after liri commands. 
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            //console.log(response);
            console.log(artist + " will be at " + response.data[0].venue.name + "." + " " + response.data[0].venue.name + " is located in " + response.data[0].venue.city + ", " + response.data[0].venue.country + "." + " The show is scheduled for: " + response.data[0].datetime + ".");
        })
        .catch(
        function (error) {
            if (error) {
                return console.log(error);
            }
});
};

if (liriCommand === "spotify-this-song") {
    var spotify = new Spotify(keys.spotify);
    spotify
    spotify.search({ type: 'track', query: 'All the Small Things', limit: 3 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log("--------------------------------------------------------------");
      console.log("Hold command/ control and click that link for a preview of your song! ----> " + data.tracks.items[0].external_urls.spotify);
      console.log("--------------------------------------------------------------");
      console.log("Here's that information for you!");
      console.log(JSON.stringify(data.tracks.items[0].artists, null, 2));
      console.log("--------------------------------------------------------------");
      });
};

if (liriCommand === "movie-this") {
    var movieTitle = "Drive"; //Can't figure out how to make the movie title be whatever is typed into the command line. I think the issue is having the process.argv tied to the LIRI commands. I tried slicing the node args at 3, and also tried running a for Loop with 3 as the iterator, neither worked.
    var queryUrlOMDB = "http://www.omdbapi.com/?t=" + movieTitle + "&plot=short&apikey=trilogy";
    axios.get(queryUrlOMDB).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("----------------------------------------------------")
            console.log("Year Released: " + response.data.Year);
            console.log("----------------------------------------------------")
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("----------------------------------------------------")
            console.log("Rotten Tomatoes Percentage Rating: " + response.data.Ratings[1].Value);
            console.log("----------------------------------------------------")
            console.log("Country Released In: " + response.data.Country);
            console.log("----------------------------------------------------")
            console.log("Language: " + response.data.Language);
            console.log("----------------------------------------------------")
            console.log("Plot: " + response.data.Plot);
            console.log("----------------------------------------------------")
            console.log("Cast: " + response.data.Actors);
            console.log("----------------------------------------------------")
        })
        .catch(
            function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            })
};

if (liriCommand === "do-what-it-says") {
    axios.get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)").then(
        function (response) {

            console.log(response.data);
        },
        function (error) {
            if (error.response) {

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    );
};