'use strict';

// select elements
const domElementBoardPanelForPlayer0 = document.querySelector('.player--0');
const domElementBoardPanelForPlayer1 = document.querySelector('.player--1');

const domElementScore0 = document.querySelector('#score--0'); // Method 1 to select id elements
const domElementScore1 = document.getElementById('score--1'); // Method 2 to select id elements

const domElementCurrentScore0 = document.getElementById('current--0');
const domElementCurrentScore1 = document.getElementById('current--1');

const domElementDice = document.querySelector('.dice');

const buttonNewGame = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const scoreBoard = [0, 0];
let currrentScore = 0;
let activePlayer = 0;
let isPlayActive = true;

const displayPlayersSwitchOnTheBoard = function () {
  // Reset score both internally and on the board
  currrentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  domElementBoardPanelForPlayer0.classList.toggle('player--active');
  domElementBoardPanelForPlayer1.classList.toggle('player--active');
};

// set initial conditions
domElementScore0.textContent = 0;
domElementScore1.textContent = 0;

domElementDice.classList.add('hidden');

// rolling dice functionality
buttonRoll.addEventListener('click', function () {
  if (isPlayActive) {
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
      displayPlayersSwitchOnTheBoard();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (isPlayActive) {
    // 1. Add current score to active player's score
    scoreBoard[activePlayer] += currrentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scoreBoard[activePlayer];

    currrentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // 2. Check if player's score is > 100, if so, finish the game, else, switch players

    if (scoreBoard[activePlayer] >= 20) {
      // Finish the game
      isPlayActive = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      domElementDice.classList.add('hidden');
    } else {
      displayPlayersSwitchOnTheBoard();
    }
  }
});

buttonNewGame.addEventListener('click', function () {
  isPlayActive = true;
  currrentScore = 0;
  scoreBoard[0] = 0;
  scoreBoard[1] = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  domElementBoardPanelForPlayer0.classList.add('player--active');
  domElementBoardPanelForPlayer1.classList.remove('player--active');

  activePlayer = 0;

  for (let i = 0; i <= 1; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
  }
});
