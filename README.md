# The Liri-Node-App
## SYNOPSIS:
**This is an application that uses node originated API calls to provide information through a command line interface.**

## THE GROWING NEED FOR UNIQUELY SUITED INFORMATION:
The ability to access mass quantities of information is now possible for anyone, and naturally, there is a growing need for this information to be uniquely gathered and sorted to cater to an individual's singular interests. Few people know what APIs are or how to utilize them, so necessarily, the delivery of said specified data is under constant optimization. There is no catch-all application or service that could possibly supply every curious person with precisely what they are looking for, and the number of customized inquiries people make will only increase as more material is put online to access. If that increase in material is coupled with the relatively static and low number of people who can use APIs to access data, then the LIRI application's reason for creation should be self-explanatory. **LIRI enhances people's basic search capabilities, empowering their queries with API-sourced answers regarding entertainment, without them having to learn how to work with APIs.** Be it movies or music, and whether the music is live or not, LIRI provides its users with simple, readable responses to their queries for music and movies.      

## ORGANIZATION:
The first organizational step entailed requiring the correct packages and files needed to power the application: 

### PACKAGES:
* **axios** - This is the main package, it delivers requests and responses for information. 
* **Spotify** - This package handles the **spotify-this-song** LIRI commands.
* **moment** - This package reformats the dates of an artist's tour into MM/DD/YYYY
* **fs** - This package executes the **do-what-it-says** LIRI command, via using a text file to call other LIRI commands.  
* **dotenv** - This package keeps the developer's (me) API key information private.

### FILES:
* **keys** - This is a Javascript file. It holds the SPOTIFY identification and secret as stored values, both of which are required to use the **node-spotify-api**.
* **env** - This file is where the actual SPOTIFY identification and secret are stored.
* **liri.js** - This is a Javascript file, and it is the main file of the application. All of the logic, API calls, requests and responses are in the code within this file.
* **random.txt** - This text file stores a default song ("I Want It That Way"), and is used alongside the **do-what-it-says** LIRI command.
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
The first step was creating a variable to store the commands you can make to LIRI. It was named **liriCommand**, and it stored **process.argv[2]**, which is the next entry's location in the command line entry array after the node path and path to the Javascript file being executed within the command line. The second step was creating a variable to store the prospective queries users made. It was named **userQuery**, and it stored **process.argv.slice(3).join(" ")**, which is every individual entry made after the LIRI-command entry, joined together into a string for the various API calls to be made. After the variables for the LIRI-command(s) and user queries were established, a series of **if statements/ conditionals** were coded with Javascript. The liriCommand variable was set to equal value and equal type of one of the four LIRI commands, and then it ran the functions that powered each LIRI command. Within these functions, axios and spotify requests were made via the corresponding queries typed into the command line. Error statments were reformatted in situations that weren't true errors, such as a band not being on tour when using axios to call the Bands In Town API. The error was reformatted in this case to instead let the user know that the artist they selected was not touring, and it then asked them to search for a different artist. 

## INSTRUCTIONS FOR USE
To use LIRI, first ensure you have it cloned to your local machine. After it is on your machine, follow this simple process:
1. Ensure you have the necessary files and packages, along with API's, that are listed in the **ORGANIZATION** section above.
1. type *npm install* and press *enter/return*, this loads the necessary files onto your computer.
1. type *node liri.js* into the command line
1. type one of these four commands into the command line
    1. *concert-this*
    1. *spotify-this-song*
    1. *movie-this*
    1. *do-what-it-says*
1. type whichever movie, artist or song (depending on which command you wish to use) after your command, and press enter. LIRI will fetch the necessary information.
1. Below is an example using the concert-this command:
    1. **node liri.js concert-this Eminem**

## TECHNOLOGIES USED
1. Node, alongside various Node packages
1. Javascript
1. Axios
1. Spotify
1. Stack Overflow

## MY ROLE
I was the sole roleplayer in this application, so everything was generated by me.