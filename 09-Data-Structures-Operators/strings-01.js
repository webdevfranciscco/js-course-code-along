'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));
console.log(airline.lastIndexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// function that receives an airplane seat
// and logs to the console whether it is
// a middle seat or not
// (B and E are middle seats)

const /* ********************************************* */
  checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat...');
    else console.log('You got lucky!');
  }; /* ---------------------------------------------- */

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// check the console to see these three outputs
console.log(new Array('H', 'i'));
console.log(new Object('Hi'));
console.log(new String('Hi'));
console.log(typeof new String('Hi'));

// all string methods return primitives,
// even if called on a string object
console.log(typeof new String('Hi').slice(1));

// change to lower or upper case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization to first letter uppercase
let passenger = 'jOnAS'; // should be 'Jonas'

// my solution
passenger =
  passenger.slice(0, 1).toUpperCase() +
  passenger.slice(1, passenger.length).toLowerCase();
console.log(passenger);

//Jona's solution
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// the same in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);
