
// Precedence

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// It is important to understand both, order of precedence [first to last] and direction of precedence [i.e. left to right versus right to left]

const currentYear = 2037;
const ageJim = currentYear - 1991; // 46
const ageSylvia = currentYear - 2018; // 19

console.log(currentYear - 19991 > currentYear - 2018); // output: true

let a, b;

a = b = 10;
console.log(a, b);

const averageAge = ageJim + ageSylvia / 2;

console.log(ageJim, ageSylvia, averageAge); // output: 46 19 55.5 (because of precedence)