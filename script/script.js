import { signIn } from './modal.js';

const btnContainer = document.querySelector('.btn-container');
const modalbox = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modalbox.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modalbox.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('sign-in')) {
    openModal();
    modalbox.innerHTML = signIn;
  }
});

modalbox.addEventListener('click', function (e) {
  if (e.target.classList.contains('close-modal')) closeModal();
});
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalbox.classList.contains('hidden'))
    closeModal();
});
