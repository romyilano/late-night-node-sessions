// Problem: we need a simple way to look at a user's badge count
// and javascript points

var profile = require("./profile.js"); // can also write profile without js
var oakland_service = require("./oakland_service.js");

var username = "romyilano"; 

oakland_service.fetchServiceRequests();
profile.get(username);