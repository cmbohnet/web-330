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

function Car(model) {
  this.model = model;
}

Car.prototype.start = function(){
  console.log("Car added to the racetrack!");
};

function Truck(model, year) {
  this.model = model;
  this.year = year;
}

Truck.prototype.start = function(){
  console.log("Truck added to the racetrack!");
};

function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

Jeep.prototype.start = function(){
  console.log("Jeep added to the racetrack!");
};

var racetrack = new Array();

function driveIt(vehicle){
  vehicle.start();
  racetrack.push(vehicle);
}

var car = new Car("Honda");
var truck = new Truck("Ford","2012");
var jeep = new Jeep("Jeep", "2005", "Thundercloud");

driveIt(car);
driveIt(truck);
driveIt(jeep);

console.log("\n" +  "-- The following vehicles have been added to the racetrack --");

for (var k=0;k<racetrack.length;k++){
  console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
}

// end program
