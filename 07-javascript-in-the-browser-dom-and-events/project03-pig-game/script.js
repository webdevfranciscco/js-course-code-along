'use strict';

// select elements
const domElementBoardPanelForPlayer0 = document.querySelector('.player--0');
const domElementBoardPanelForPlayer1 = document.querySelector('.player--1');

const domElementScore0 = document.querySelector('#score--0'); // Method 1 to select id elements
const domElementScore1 = document.getElementById('score--1'); // Method 2 to select id elements

const domElementCurrentScore0 = document.getElementById('current--0');
const domElementCurrentScore1 = document.getElementById('current--1');

const domElementDice = document.querySelector('.dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const scoreBoard = [0, 0];
let currrentScore = 0;
let activePlayer = 0;

// set initial conditions
domElementScore0.textContent = 0;
domElementScore1.textContent = 0;

domElementDice.classList.add('hidden');

// rolling dice functionality
buttonRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const diceRollResult = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  domElementDice.classList.remove('hidden');
  domElementDice.src = `dice-${diceRollResult}.png`;
  // Check for rolled 1: if true, switch to new player
  if (diceRollResult !== 1) {
    // Add dice to current score
    currrentScore += diceRollResult;
    document.getElementById(`current--${activePlayer}`).textContent =
      currrentScore;
  } else {
    // Reset score both internally and on the board
    currrentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    domElementBoardPanelForPlayer0.classList.toggle('player--active');
    domElementBoardPanelForPlayer1.classList.toggle('player--active');
  }
});
