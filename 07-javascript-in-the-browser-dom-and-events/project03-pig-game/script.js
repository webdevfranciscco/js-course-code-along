'use strict';

// select elements
const domElementScore0 = document.querySelector('#score--0'); // Method 1 to select id elements
const domElementScore1 = document.getElementById('score--1'); // Method 2 to select id elements

const domElementCurrentScore0 = document.getElementById('current--0');
const domElementCurrentScore1 = document.getElementById('current--1');

const domElementDice = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let currrentScore = 0;

// set initial conditions
domElementScore0.textContent = 0;
domElementScore1.textContent = 0;

domElementDice.classList.add('hidden');

// rolling dice functionality
buttonRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const diceRollResult = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRollResult);
  // 2. Display dice
  domElementDice.classList.remove('hidden');
  domElementDice.src = `dice-${diceRollResult}.png`;
  // Check for rolled 1: if true, switch to new player
  if (diceRollResult !== 1) {
    // Add dice to current score
    currrentScore += diceRollResult;
    domElementCurrentScore0.textContent = currrentScore;
  } else {
    // Switch to next player
    domElementCurrentScore0.textContent = 0; // temporary functionality, TODO
  }
});
