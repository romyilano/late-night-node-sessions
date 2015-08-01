var http = require("http");

// Problem: we need a simple way to look at a user's badge count
// and javascript points
var username = "romyilano"; 

function printMessage(username, badgeCount, points) {
   var message = username + " has " + badgeCount + " total badge(s) and " + points + " points";
   console.log(message);
}

// Connect to api url http://teamtreehouse.com/chalkers.json
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
   // read the data from the response
   console.log(response.statusCode);
   var body = "";
   // streams chunks of data as they come in
   response.on("data", function(chunk) {
      body += chunk;
   });
   response.on("end", function() {
      console.log(body);
   });
   // parse the data
   // print the data   
});

request.on("error", function(error) {
   console.log(error.message);
});