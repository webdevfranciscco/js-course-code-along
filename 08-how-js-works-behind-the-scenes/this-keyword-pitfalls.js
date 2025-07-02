'use strict';

/*
// isAdult0 will fail in this code:

const jonas0 = {
  firstName0: 'Jonas',
  year0: 1991,
  calcAge0: function () {
    console.log(2037 - this.year0);

    const isAdult0 = function () {
      console.log(2037 - this.year0 >= 18);
    };
    isAdult0();
  },
};

jonas0.calcAge0();
// output:
// >> 46
// Uncaught TypeError: Cannot read properties of undefined (reading 'year0')
// at isAdult0 (this-keyword-pitfalls.js:12:31)
// at Object.calcAge0 (this-keyword-pitfalls.js:14:5)
// at this-keyword-pitfalls.js:18:8
*/

/*
// solution 1: copy "this" to a "that" variable before the inner function

const jonas1 = {
  firstName1: 'Jonas',
  year1: 1991,
  calcAge1: function () {
    console.log(2037 - this.year1);

    const that = this;

    const isAdult1 = function () {
      console.log(2037 - that.year1 >= 18);
    };
    isAdult1();
  },
};

jonas1.calcAge1();
*/

// solution 2: convert the inner function to an arrow function

console.log(self);
const jonas2 = {
  firstName1: 'Jonas',
  year2: 1991,
  calcAge2: function () {
    console.log(2037 - this.year2);

    const isAdult2 = () => {
      console.log(2037 - this.year2 >= 18);
    };
    isAdult2();
  },
};

jonas2.calcAge2();
