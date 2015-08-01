var http = require("http");

var oaklandPublicServiceRequestsJSON = "http://data.oaklandnet.com/resource/quth-gb8e.json";

function fetchServiceRequests() {
   var request = http.get(oaklandPublicServiceRequestsJSON, function(response) {
   // read the data from the response
   var body = "";
   response.on("data", function(chunk) {
      body += chunk;
   });
   response.on("end", function() {
      if (response.statusCode === 200) {
         try {
            var responseArray = JSON.parse(body);
            // print the responsearray
            var requestOne = responseArray[0];
            console.log("The first request: " + requestOne.description + " \n at " + requestOne.reqaddress.human_address);
         } catch(error) {
            printError(error);
         }
      } else {
         printError({message: "There was an error getting the service request data. " + http.STATUS_CODES[response.statusCode]});
      }
   });
});
}

// print out error messages
function printError(error) {
   console.log(error.message);
}


module.exports.fetchServiceRequests = fetchServiceRequests;