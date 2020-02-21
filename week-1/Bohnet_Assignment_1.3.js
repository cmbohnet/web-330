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

//Using functions, create a cell phone object with the following properties / methods
//Manufacturer
//Model
//Color
//Price
//getPrice()
//getModel()
//getDetails()
function CellPhone(manufacturer) {

this.manufacturer = manufacturer;

this.model = "XP";

this.color = "White";

this.price = 2000;
//The getPrice() function will return the cell phones price
this.getPrice = function() {

return this.price;
};
//The getModel() function will return the cell phones model
this.getModel = function() {

return this.model;

};
//The getDetails() function must call the getPrice() and getModel() functions and output the Manufacturer, Model, Color, and Price
this.getDetails = function() {

return "Manufacturer: " + this.manufacturer + "\n" + "Model: " + this.getModel() +  "\n" + "Color: " + this.color +  "\n" + "Price: " + this.getPrice();

};

}
//Instantiate a new cell phone object (supply your own default value)

var cell = new CellPhone("Apple");
console.log("-- DISPLAYING CELL PHONE DETAILS --");
//call the getDetails() function
console.log(cell.getDetails())

// end program
