# The Liri-Node-App
## SYNOPSIS:
**This is an application that uses node originated API calls to provide information through a command line interface.**

## THE GROWING NEED FOR UNIQUELY SUITED INFORMATION:
The ability to access mass quantities of information is now possible for anyone, and naturally, there is a growing need for this information to be uniquely gathered and sorted to cater to an individual's singular interests. Few people know what APIs are or how to utilize them, so necessarily, the delivery of said specified data is under constant optimization. There is no catch-all application or service that could possibly supply every curious person with precisely what they are looking for, and the number of customized inquiries people make will only increase as more material is put online to access. If that increase is coupled with the relatively static and low number of people who can use APIs to access data, then the LIRI application's reason for creation should be self-explanatory. **LIRI enhances people's basic search capabilities, powering individual queries with API-sourced answers regarding entertainment.** Be it movies or music, and whether the music is live or not, LIRI provides its users with simple, readable responses to their queries for music and movies.      

## ORGANIZATION:
The first organizational step entailed requiring the correct packages and files needed to power the application: 

### PACKAGES:
* **axios** - This is the main package, it delivers requests and responses for information. 
* **Spotify** - This package handles the spotify-this-song LIRI commands.
* **moment** - This package reformats the dates of an artist's tour into MM/DD/YYYY
* **fs** - This package executes the do-what-it-says LIRI command, via using a text file to call other LIRI commands.  
* **dotenv** - This package keeps the developer's (me) API key information private.

### FILES:
* **keys** - This is a Javascript file. It holds the SPOTIFY identification and secret as stored values, both of which are required to use the node-spotify-api.
* **env** - This file is where the actual SPOTIFY identification and secret are stored.
* **liri.js** - This is a Javascript file, and it is the main file of the application. All of the logic, API calls, requests and responses are in the code within this file.
* **random.txt** - This text file stores a default song ("I Want It That Way"), and is used alongside the do-what-it-says LIRI command.
* **README.md** - This file stores all the information necessary to understand the application.
* **package.json** - This file is a log of sorts, storing all the necessary dependencies for powering the application.
* **.gitignore** - This file holds several files, and tells git not to track them (node_modules, .DS_store, .env).
* **package-lock.json** - This is an automatically generated file. It stores the specific versions of dependencies in a tree-format. 

### COMMANDS:
The application is dependent upon its commands:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

### CODING + PROGRAMMING:
The first step was creating a variable to store the commands you can make to LIRI. It was named **liriCommand**, and stored **process.argv[2]**, which is the next entry after the node path and path to the Javascript file being executed within the command line. The second step was creating a variable to store the prospective queries users made. It was named **userQuery** and stored **process.argv.slice(3).join(" ")**, which is every individual entry made after the LIRI-command entry, joined together into a string for the various API calls to be made. After the variables for the LIRI-command(s) and user queries were established, a series of **if statements/ conditionals** were coded, in which the liriCommand variable had to be of equal value and equal type to one of the four LIRI commands before it could run the functions that powered each LIRI command. Within these functions, axios and spotify requests were made via the corresponding queries typed into the command line. 

## INSTRUCTIONS FOR USE
To use LIRI, first ensure you have it cloned to your local machine. After it is on your machine, follow this simple process:
1. Item 1
1. Item 2
1. Item 3 