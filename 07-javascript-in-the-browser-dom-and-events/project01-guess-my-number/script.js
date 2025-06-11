"use strict";

/*
  Coding Challenge #1

  Implement a game rest functionality, so that the player can make a new guess!

  Your tasks:

  1. Select the element with the 'again' class and attach a click event handler

  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

  3. Restore the initial conditions of the message, number, score and guess input fields

  4. Also restore the original background color (#222) and number width (15rem)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Please,enter a number greater than zero!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed it!!!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "Your number is too high"
          : "Your number is too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Game over! ☹️";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
