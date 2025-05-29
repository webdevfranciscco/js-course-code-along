
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

    types[i] = typeof jonas[i];
}

console.log(types);