'use strict';

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight for repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You rolled a ${dice}`);