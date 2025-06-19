'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log('output >', output);

    if (birthYear > 1980 && age < 1997) {
      var isMillenial = true;
      const firstName = 'Steve'; // this variable name is also used in the global scope, so if this line exists, message will contain Steve, but if it is deleted, message will contain Jonas
      let message = `You are a milennial ${firstName}.`;
      console.log(message);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(message); // undefined in this scope
    console.log('isMillenial >', isMillenial); // IS defined in this scope, because var is function-scoped
    console.log(add(2, 3)); // this does not work in strict mode, but it does work if strict mode is not enabled
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // undefined in this scope
// printAge(); // undefined in this scope

// output = 'NEW OUTPUT!'; // This changes the contents of the varable in a higher scope and the value "NEW OUTPUT!" is therefore available wherever that variable is
