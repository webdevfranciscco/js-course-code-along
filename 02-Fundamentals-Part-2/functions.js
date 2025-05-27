'use strict';


// function declaration


const age1 = calcAge1(1991);
console.log(`The age from the function declaration is ${age1} years.`);

function calcAge1(birthYear) {   // this is a declaration, it can be placed anywhere in the code and the interpreter will process it first before executing any code, so it can be called in the code even before it is listed, like we are doing here
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;  // this function is an expression because it returns a value... functions are not actually a type of object, but values
}

const age2 = calcAge2(1998);
console.log(`The age from the function expression is ${age2} years.`);
