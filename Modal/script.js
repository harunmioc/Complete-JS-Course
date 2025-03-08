'use strict';

const modalElem = document.querySelector('.modal');
const overlayElem = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal= document.querySelectorAll('.show-modal');


const openModal = function () {
    modalElem.classList.remove('hidden');
    overlayElem.classList.remove('hidden');
  };
  
const closeModal = function () {
    modalElem.classList.add('hidden');
    overlayElem.classList.add('hidden');
  };


for(let i=0; i<btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlayElem.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modalElem.classList.contains('hidden')) {
        closeModal();
    }
});