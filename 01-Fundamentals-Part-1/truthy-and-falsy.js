
// Falsy Values. Values that are not exactly false, but that will convert to false when we try to convert or coerce them into a boolean

// There are 5 falsy values: 0, '', undefined, null, NaN

console.log('Start');
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log('End');

const money = 0;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}
