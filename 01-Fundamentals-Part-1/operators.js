
/*
const ageJames = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJames, ageSarah);
*/

// Math Operators

// This can be refactored to be more programmable:

const now = 2037;
const ageJames = now - 1991; // 46
const ageSarah = now - 2018; // 19
console.log(ageJames, ageSarah);

console.log(ageJames * 2, ageJames / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2, output = 92, 4.6, 8

const firstName = 'James';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName); // James Smith

// Assignment Operators

let x = 10 + 5; // 15
x += 10; // x = x+10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison Operators: >, <, >=, <=

console.log(ageJames > ageSarah); // output: true
console.log(ageSarah >= 18); // output: true

const isFullAge = ageSarah >= 18;

console.log(isFullAge); // output: true
