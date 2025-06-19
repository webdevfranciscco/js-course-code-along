'use strict';
// Variables

console.log(me); // undefined
console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
console.log(year); // Uncaught ReferenceError: Cannot access 'job' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
