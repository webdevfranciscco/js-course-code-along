
// Falsy Values. Values that are not exactly false, but that will convert to false when we try to convert or coerce them into a boolean

// There are 5 falsy values: 0, '', undefined, null, NaN

console.log('Start');
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log('End');

const money = NaN;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0; // Any falsy value here...

if (height) {
    console.log('Yay! height is defined.');
} else {
    console.log('height is UNDEFINED.'); // will make this code to run. ...
}

// ... introducing a bug in our code.