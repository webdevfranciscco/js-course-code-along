'use strict';

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
