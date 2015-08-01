// Problem: we need a simple way to look at a user's badge count
// and javascript points
var profile = require("./profile.js"); // can also write profile without js
var oakland_service = require("./oakland_service.js");

var username = "romyilano"; 
// var users = ["chalkers", "joykesten2", "romyilano"];

// console.dir(process.argv);
var users = process.argv.slice(2);
users.forEach(profile.get);

// oakland_service.fetchServiceRequests();
// profile.get(username);
// profile.get("joykesten2");

// this is weird! since there are exactly 1 callback for forEach and get()
// it just gets passed back
// users.forEach(profile.get);