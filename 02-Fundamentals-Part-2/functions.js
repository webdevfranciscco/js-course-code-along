'use strict';


// function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(`The age from the function declaration is ${age1} years.`);


// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;  // this function is an expression because it returns a value... functions are not actually a type of object, but values
}

const age2 = calcAge2(1998);
console.log(`The age from the function expression is ${age2} years.`);
