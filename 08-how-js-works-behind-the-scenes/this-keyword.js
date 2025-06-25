"use strict";

// this in the golbal scope is the global object

console.log('\n"this" in the Global Scope =', this);

//

const calcAge = function (birthYear) {
  console.log('\n"this" within a function in the GlobalScope =', this);
  console.log(2037 - birthYear);
};

calcAge(1991);

//

const calcAgeArrow = (birthYear) => {
  console.log('\n"this" within an arrow function in the global scope =', this);
  console.log(2037 - birthYear);
};

calcAgeArrow(1980);

//

const jonas = {
  objectId: "jonas",
  year: 1991,
  calcAge: function () {
    console.log('\n"this" =', this);
    console.log(2037 - this.year);
  },
};

console.log(
  '\nSince "jonas" calls calcAge, "this" points to the "jonas" object:'
);

jonas.calcAge();

//

const matilda = {
  objectId: "matilda",
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

console.log(
  '\nSince "matilda" calls calcAge this time, now "this" points to the "matilda" object. Even though calcAge is only defined in the "jonas" object in OUR code. Notice calcAge IS a method in "matilda", but we did not write it there:'
);

matilda.calcAge();

//

const f = jonas.calcAge;

console.log('The function "f()" is now defined as:', f);

console.log(
  'However, "this" for it will be logged as "undefined" when JS gets to the first "console.log" line within "f()" and, therefore "this.year" will also be undefined in the second "console.log" line, which will cause JS to thow an error:'
);

f();
