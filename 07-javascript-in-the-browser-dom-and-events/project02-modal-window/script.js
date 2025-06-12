'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

console.log(buttonsOpenModal);

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener('click', function () {
    console.log(`Button ${i} clicked`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
