'use strict';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
  },

  greet: function () {
    console.log('The value of "this" within greet():', this);
    console.log(
      'The value of "this.firstName" within greet():',
      this.firstName
    );
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet(); // Now that the method "greet()" is a regular function expression, "this" is the parent object, firstName is equal to 'Jonas' and the output is 'Hey Jonas'
jonas.calcAge();
