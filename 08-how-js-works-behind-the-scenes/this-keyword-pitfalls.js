'use strict';

// adding this "var" declaration makes the property "firstName" available to the "jonas.greet()"" call
// this happens because "var" adds "firstName" as a property to the Window Object, which is what "this" is set up to in "jonas.greet()"
var firstName = 'Matilda'; // <-- we only added this line
// and the result is significantly different
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log('The value of "this" within greet():', this);
    console.log(
      'The value of "this.firstName" within greet():',
      this.firstName
    );
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet(); // this call logs 'Hey Matilda' instead of 'Hey undefined' to the console, by pulling "Matilda" from the firstName property of the Window Object
