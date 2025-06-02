
const age = 25;

/*
    age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.')
*/

// conditional declaration of a variable

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// compare this last code to the following to understand the benefit of the ternary operator

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)