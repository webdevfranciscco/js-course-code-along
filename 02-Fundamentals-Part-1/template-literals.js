
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// Same as above, but using template literals:

const jonaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonaNew);

// Some programmers started using the back ticks as the default string delimiter. That way, when you face to the need of a template literal, you ar half way there! Kind of makes sense.
// Maybe the one caveat is that some IDEs do not autocomplete back ticks

console.log(`Just a regular string...`);

// Multiline strings without literal template:

console.log('String with\n\
    multiple\n\
    lines.');

// Multiline strings with literal template:

console.log(`String with
    multiple
    lines.`);