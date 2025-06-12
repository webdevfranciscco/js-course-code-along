'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

const closeModalAndOverlay = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalAndOverlay = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener('click', openModalAndOverlay);
}

buttonCloseModal.addEventListener('click', closeModalAndOverlay);

overlay.addEventListener('click', closeModalAndOverlay);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModalAndOverlay();
    }
  }
});
