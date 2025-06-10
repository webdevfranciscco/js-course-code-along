"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Please,enter a number greater than zero!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed it!!!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your number is too high ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Game over! ☹️";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your number is too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Game over! ☹️";
    }
  }
});
