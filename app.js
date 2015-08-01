// Problem: we need a simple way to look at a user's badge count
// and javascript points
var profile = require("./profile.js"); // can also write profile without js
var oakland_service = require("./oakland_service.js");

var username = "romyilano"; 

// console.dir(process.argv);
var commandInput = process.argv.slice(2);

if (commandInput[0] === "treehouse") {
   var users = commandInput.slice(1);
   console.log(users);
   users.forEach(profile.get);
} else if (commandInput[0] === "oakland_service") {
   oakland_service.fetchServiceRequests();
}
