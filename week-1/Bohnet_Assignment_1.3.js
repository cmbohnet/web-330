/*
============================================
; Title: Assignment 1.3
; Author: Chris Bohnet
; Date: 19 February 2020
; Modified By:
; Description: Class Refresher
============================================

*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-1.3'))

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program
function CellPhone(manufacturer) {

this.manufacturer = manufacturer;

this.model = "Pilot";

this.color = "White";

this.price = 12000;

this.getPrice = function() {

return this.price;
};

this.getModel = function() {

return this.model;

};
this.getDetails = function() {

return "Manufacturer: " + this.manufacturer + "\n" + "Model: " + this.getModel() +  "\n" + "Color: " + this.color +  "\n" + "Price: " + this.getPrice();

};

}

var cell = new CellPhone("Honda");
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(cell.getDetails())

// end program
