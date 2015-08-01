var http = require("http");

// Problem: we need a simple way to look at a user's badge count
// and javascript points
var username = "romyilano"; 
var teamtreehouseURLString = "http://teamtreehouse.com/" + username + ".json";
// actually https 
var oaklandPublicServiceRequestsJSON = "http://data.oaklandnet.com/resource/quth-gb8e.json";

// print out message
function printMessage(username, badgeCount, points) {
   var message = username + " has " + badgeCount + " total badge(s) and " + points + " points";
   console.log(message);
}

// print out error messages
function printError(error) {
   console.log(error.message);
}

// Connect to api url http://teamtreehouse.com/chalkers.json
var request = http.get(teamtreehouseURLString, function(response) {
   // read the data from the response
   console.log(response.statusCode);
   var body = "";
   // streams chunks of data as they come in
   response.on("data", function(chunk) {
      body += chunk;
   });
   response.on("end", function() {
      try {
         var profile = JSON.parse(body);
         printMessage(username, profile.badges.length, profile.points.JavaScript);
      } catch(error) {
         printError(error);
      }
   });
   // parse the data

   // print the data   
});

// connection error
request.on("error", printError);
