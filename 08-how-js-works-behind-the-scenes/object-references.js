'use strict';

// object reference in practice

const jessica1 = {
  objectId: 'jessica1',
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica2 = {
  objectId: 'jessica2',
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  siblings: ['Alice', 'Bob'],
};

const jessica2Copy = { ...jessica2 }; // this copies all the elments of jessica2 into jessica2Copy

console.log(
  'These objects have the same elements, but are they different objects?'
);
console.log('jessica2:', jessica2);
console.log('jessica2Copy:', jessica2Copy);

// let's make jessica2Copy unique by changing de objectId and the last name
jessica2Copy.objectId = 'jessica2Copy';
jessica2Copy.lastName = 'Davis';

// now we can tell they are different objects
console.log('Clearly, these are different objects:');
console.log('jessica2:', jessica2);
console.log('jessica2Copy:', jessica2Copy);

// now let's add a couple siblings to jessica2Copy
jessica2Copy.siblings.push('Mary');
jessica2Copy.siblings.push('John');

console.log('When we add 2 more siblings to jessica2Copy, this happens:');
console.log('jessica2:', jessica2);
console.log('jessica2Copy:', jessica2Copy);
console.log(
  'Both jessica2 and jessica2Copy have the same 4 elements on the "family" array!!'
);
console.log(
  'The spread operator copies all of the properties, but any properties that are also objects are still passed by reference.'
);
