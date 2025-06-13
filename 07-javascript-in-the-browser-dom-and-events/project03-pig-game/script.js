'use strict';


// select elements
let domElementScore0 = document.querySelector('score--0');
let domElementScore1 = document.getElementById('score--1');

let domElementDice = document.getQuerySelector('dice');

// set initial conditions
domElementScore0.textValue = 0;
domElementScore1.textValue = 0;

domElementDice.classList.add('hidden') = 0;
