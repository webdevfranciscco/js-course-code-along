'use strict';

// object reference in practice

const jessica = {
  objectId: 'jessica',
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);
