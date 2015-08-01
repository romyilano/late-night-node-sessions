// Problem: we need a simple way to look at a user's badge count
// and javascript points
var profile = require("./profile.js");

var username = "romyilano"; 
var oaklandPublicServiceRequestsJSON = "http://data.oaklandnet.com/resource/quth-gb8e.json";

profile.get(username);