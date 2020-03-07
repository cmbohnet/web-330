/*
============================================
; Title: Assignment 3.3
; Author: Chris Bohnet
; Date: 3 March 2020
; Modified By:
; Description: The Singleton Pattern
============================================

*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-3.3'))

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
//Create a new function and name it databaseSingletonTest()
var DatabaseSingletonTest =(function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized.");
    return postgresDatabase;
  }

  return {
   getInstance: function() {
    if (!instance) {
       instance = createInstance();
    }
    return instance;
   }
  }
})();

//Create two new database instances
function databaseInit() {
   var databaseInstance1 = DatabaseSingletonTest.getInstance();
   var databaseInstance2 = DatabaseSingletonTest.getInstance();
   //Call the console.log() function and output whether the two instances match
   console.log("Same database instance? " + (databaseInstance1 === databaseInstance2));
}

//Call the databaseSingletonTest() function
databaseInit();


// end program
