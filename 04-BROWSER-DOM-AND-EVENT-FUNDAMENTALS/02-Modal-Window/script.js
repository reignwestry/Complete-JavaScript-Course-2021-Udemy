'use strict';

// 02 PROJECT: Modal Window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const openModal =  function(){
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){

  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling 'ESC' keypress events
// e ===> any event
document.addEventListener('keydown', function(e) {
  //logs the event triggered
  console.log(e.key);
  // e.key === lists the key pressed

  if (e.key === 'Escape') console.log('Esc was pressed');
  if (e.key === 'Escape') {
    console.log('Esc was pressed');
    if (!modal.classList.contains('hidden')){
      closeModal();
    }
  }
})