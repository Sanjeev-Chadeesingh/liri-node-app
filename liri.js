require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require("node-spotify-api");

var moment = require('moment');
moment().format();

var spotify = new spotify(keys.spotify);