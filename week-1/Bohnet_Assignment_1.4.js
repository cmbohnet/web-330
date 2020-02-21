/*
============================================
; Title: Assignment 1.4
; Author: Chris Bohnet
; Date: 19 February 2020
; Modified By:
; Description: Duck typing
============================================

*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-1.4'))

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
//Create a function constructor Car class with one parameter (model)
function Car(model) {
  this.model = model;
}
//Add a prototype method called “start” to output “ added to the racetrack!”
Car.prototype.start = function(){
  console.log("Car added to the racetrack!");
};

//Create a function constructor Truck class with two parameters (model, year)
function Truck(model, year) {
  this.model = model;
  this.year = year;
}
//Add a prototype method called “start” to output “ added to the racetrack!”
Truck.prototype.start = function(){
  console.log("Truck added to the racetrack!");
};

//Create a function constructor Jeep class with three parameters (model, year, color)
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}
//Add a prototype method called “start” to output “ added to the racetrack!”
Jeep.prototype.start = function(){
  console.log("Jeep added to the racetrack!");
};

//Define an empty racetrack array
var racetrack = new Array();

//Create a driveIt function with one parameter (vehicle).  From within the driveIt function call the “start” function on the vehicle
//vehicle.start and push the vehicle to the racetrack array
function driveIt(vehicle){
  vehicle.start();
  racetrack.push(vehicle);
}

//Create three (3) vehicle classes
var car = new Car("Honda");
var truck = new Truck("Ford","2012");
var jeep = new Jeep("Jeep", "2005", "Thundercloud");

// pass them through the driveIt() function
driveIt(truck);
driveIt(car);
driveIt(jeep);

console.log("\n" +  "-- The following vehicles have been added to the racetrack --");

//Iterate over the racetrack array and output the results
for (var k=0;k<racetrack.length;k++){
  console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
}

// end program
