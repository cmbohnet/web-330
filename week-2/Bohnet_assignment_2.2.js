/*
============================================
; Title: Assignment 2.4
; Author: Chris Bohnet
; Date: 25 February 2020
; Modified By:
; Description: EJS Views
============================================

*/

var header = require('../bohnet-header');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-2.4'))

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
//Create an object literal Person with one function, getAge()
var person = {
//The getAge() function should return the Person’s age
getAge: function () {

return this.age;

}

};

//Create a new object literal, passing in the getAge() function
var person1 = Object.create(person, {
//From within the new object literal define an age and fullname function
"age": {

"value": "21",

enumerable: true

},

"fullName": {

"value": "Chris Stom"

}

});

//Call the console.log() function and output the Persons fullname

console.log("The person's full name is  '" + person1.fullName + "'");

//Call the console.log() function and output the age (use the getAge() function)

console.log("The person's age is  '" + person1.getAge() + "'");

// end program
