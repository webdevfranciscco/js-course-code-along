
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    // Another way to do this is as follows:
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] != 'string') continue; // this means, continue to the code after this loop, which is the same as saying: exit this loop
    console.log(jonas[i], typeof jonas[i]);
}

// break
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; // this means, continue to the code after this loop, which is the same as saying: exit this loop
    console.log(jonas[i], typeof jonas[i]);
}