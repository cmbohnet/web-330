
/*
============================================
; Title: Assignment 3.2
; Author: Chris Bohnet
; Date: 3 March 2020
; Modified By:
; Description: The Factory Pattern
============================================

*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-3.2'))


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
//create an Oracle database object
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}
//create an Informix database object
function Informix(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}


function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } else {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

//Create a new oracleFactory and call the createDatabase prototype function (supply your own default values)
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "cbohnet",
    password: "abc123",
    server: "localhost:8080"
});

//Output the results
console.log(oracle instanceof Oracle);
console.log(oracle);

//Create a new oracleFactory and call the createDatabase prototype function (supply your own default values)
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "cstom",
    password: "iCantRemember",
    server: "localhost:8080",
    version: "2.3"
});

//Output the results
console.log(informix instanceof Informix);
console.log(informix);


// end program


