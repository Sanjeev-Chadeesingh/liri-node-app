require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require("node-spotify-api");

var moment = require("moment");

var fs = require("fs");

var liriCommand = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");


if (liriCommand === "concert-this") {
    var artist = userQuery;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            //console.log(response);
            console.log("--------------------------------------------------------");
            console.log(artist + " will be at " + response.data[0].venue.name + "." + " " + response.data[0].venue.name + " is located in " + response.data[0].venue.city + ", " + response.data[0].venue.country + ".");
            console.log("--------------------------------------------------------"); var date = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log(artist + " will perform at " + response.data[0].venue.name + " on " + date);
            console.log("--------------------------------------------------------");
        })
        .catch(
            function (error) {
                if (error) {
                    return console.log("Sorry, the band or musician you picked isn't touring right now. Could you search for a different artist or band?");
                }
            });
};

if (liriCommand === "spotify-this-song") {
    //I cannot set a default here! Default needs to be Ace of Base, The Sign.
    query = userQuery;
    var spotify = new Spotify(keys.spotify);
    spotify
    spotify.search({ type: "track", query: userQuery }, function (err, data) {
        if (err) {
            return console.log("I can't find that song, sorry. Try another one!");
        }
        console.log("----------------------------------------------------");
        console.log("Hold command/ control and click that link for a preview of your song! ----> " + data.tracks.items[0].external_urls.spotify);
        console.log("----------------------------------------------------");
        var trackInfo = data.tracks.items[0];
        console.log("Here's that information for you!");
        console.log("Artist: " + trackInfo.artists[0].name)
        console.log("Song Name: " + trackInfo.name)
        console.log("Album Name: " + trackInfo.album.name)
        console.log("---------------------------------------------------");
        //console.log(JSON.stringify(data.tracks.items[0].artists, null, 2));
    });
};

if (liriCommand === "movie-this") {
    //I have the default, yet still log the error.response!
    var movieTitle = userQuery;
    var defaultTitle = "Mr. Nobody";
    var queryUrlOMDB = "http://www.omdbapi.com/?t=" + movieTitle + "&plot=short&apikey=trilogy";
    axios.get(queryUrlOMDB).then(
        function (response) {
            console.log("---------------------------------------------------");
            console.log("Title: " + response.data.Title);
            console.log("----------------------------------------------------");
            console.log("Year Released: " + response.data.Year);
            console.log("----------------------------------------------------");
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("----------------------------------------------------");
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
                if(error) {
                    return axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&plot=short&apikey=trilogy").then(
                        function(response) {
                            console.log("---------------------------------------------------");
                            console.log("Title: " + response.data.Title);
                            console.log("----------------------------------------------------");
                            console.log("Year Released: " + response.data.Year);
                            console.log("----------------------------------------------------");
                            console.log("IMDB Rating: " + response.data.imdbRating);
                            console.log("----------------------------------------------------");
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
                        }).catch(
                            function(error) {
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
                }
            })
};

if (liriCommand === "do-what-it-says") {
    //I don't know what part of FS to use here to make this work.
    fs.appendFile("random.txt", "")
}; 