'use strict';


// arrow function

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(`Years to retirement: ${yearsUntilRetirement(1991)}`);
