'use strict';

// Variables

/*
console.log(me); // undefined
console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
console.log(year); // Uncaught ReferenceError: Cannot access 'job' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

// Functions

console.log(addDeclaration(2, 3)); // 5
console.log(addExpression(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpression' before initialization
console.log(addArrow(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpression' before initialization
function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
