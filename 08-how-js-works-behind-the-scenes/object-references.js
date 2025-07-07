'use strict';

// object reference in practice

const jessica = {
  objectId: 'jessica',
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

let marriedJessica = jessica; // << changing const to let here

marriedJessica.lastName = 'Davis';

marriedJessica = { number: 2 }; // << allows us to do this

console.log('Before:', jessica);
console.log('After:', marriedJessica);
