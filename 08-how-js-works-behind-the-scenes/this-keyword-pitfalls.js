'use strict';

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

jonas.greet(); // this call logs 'Hey undefined' to the console
