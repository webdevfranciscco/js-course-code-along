
// Arrays have elements and are indexed by a number

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// Objects contain properties, each formed by a key/value pair (i.e. firstName/'Jonas')

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// To retrieve a value from an object is with the name of the property
// We can do this with two different methods

// Method 1: dot notation

console.log('Dot notation:', jonasObject.lastName);

// Method 2: brackets notation
// An advantage here is that any expression can be within the brackets, which is powerful

console.log('Brackets notation:', jonasObject['lastName']);

// Use of expressions withn brackets

const nameKey = 'Name';

console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

// Another example of expressions in brackets

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.')

if (jonasObject[interestedIn]) {
    console.log(jonasObject[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
}

// adding properties to an object using both notations

jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonasschmedtmann';
console.log(jonasObject);