'use strict';

// object reference in practice

const jessica = {
  objectId: 'jessica',
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

const marriedJessica = marryPerson(jessica, 'Davis');

console.log('Before:', jessica);
console.log('After:', marriedJessica);
