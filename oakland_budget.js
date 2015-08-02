/*
Proposed Budget for Fiscal Years
2015-2016
https://data.oaklandnet.com/Financial/Proposed-Budget-for-Fiscal-Years-2015-2017/w4j2-chmt
*/

// todo add underscore
var http = require("http");

var oaklandBudgetEndpointURL = "http://data.oaklandnet.com/resource/w4j2-chmt.json";

function printBudgetItem(budgetItem) {
   console.log("=======");
   console.log("Account Description: " + budgetItem.account_description);
   console.log("$" + budgetItem.value + " : " + budgetItem.fund_description);
}

function fetchBudgetData() {
   var request = http.get(oaklandBudgetEndpointURL, function(response) {
      // read the data from the response
      var body = "";
      response.on("data", function(chunk) {
      body += chunk;
   });
   response.on("end", function() {
      if (response.statusCode === 200) {
         try {
            var responseArray = JSON.parse(body);
            // todo use underscore
            for (var i = 0; i < responseArray.length; i++) {
               printBudgetItem(responseArray[i]);
            }
         } catch(error) {
            printError(error);
         }
      } else {
         console.log("response code is: " + response.statusCode);
      }
   });
});
}

function printError(error) {
   console.log(error.message);
}

module.exports.fetchBudgetData = fetchBudgetData;