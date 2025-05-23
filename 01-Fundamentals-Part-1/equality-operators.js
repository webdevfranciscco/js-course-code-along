
let age = '18'; // Using this as a string...

console.log(`age = ${age}`);

if (age === 18) { // ... causes this to be false...
    console.log('You just became an adult :D (strict)');
} else console.log('You are too young (strict)');

if (age == 18) { // ... but this to be true...
    console.log('You just became an adult :D (loose)');
} else console.log('You are too young (loose)');

age = '17';

console.log(`age = ${age}`);

if (age === 18) { // ... this is also false (a string is not equal to a number)...
    console.log('You just became an adult :D (strict)');
} else console.log('You are too young (strict)');

if (age == 18) { // ... as this is (coerced number 17 is not equal to 18)...
    console.log('You just became an adult :D (loose)');
} else console.log('You are too young (loose)');

// ... only they are false for different reasons, yet still they produce the same result.

// this can be an easy source of bugs and confusion when trying to track them down.

// It is better to ALWAYS USE === to test for equality. If type conversion is a choice, make it explicit by using a conversion, not by allowing coercion.
