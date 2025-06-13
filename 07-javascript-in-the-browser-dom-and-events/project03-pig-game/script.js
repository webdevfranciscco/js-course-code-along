'use strict';

// select elements
const domElementScore0 = document.querySelector('#score--0');
const domElementScore1 = document.getElementById('score--1');

const domElementDice = document.querySelector('.dice');

// set initial conditions
domElementScore0.textContent = 0;
domElementScore1.textContent = 0;

domElementDice.classList.add('hidden');
