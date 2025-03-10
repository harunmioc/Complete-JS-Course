'use strict';

const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.getElementById('score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');

const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRules = document.querySelector('.btn--rules');
const btnCloseRules = document.querySelector('.close-modal');

let scores, currentScore, activePlayer, playing;

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0Elem.textContent = 0;
    score1Elem.textContent = 0;
    current0Elem.textContent = 0;
    current1Elem.textContent = 0;

    diceElem.classList.add('hidden');
    player0Elem.classList.remove('player--winner');
    player1Elem.classList.remove('player--winner');
    player0Elem.classList.add('player--active');
    player1Elem.classList.remove('player--active');
}

init();

btnNew.addEventListener('click', init);

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Elem.classList.toggle('player--active');
    player1Elem.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
      const dice = Math.trunc(Math.random() * 6) + 1;
  
      diceElem.classList.remove('hidden');
      diceElem.src = `dice-${dice}.png`;
  
      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      } else {
        switchPlayer();
      }
    }
  });


  btnHold.addEventListener('click', function () {
    if (playing) {
      scores[activePlayer] += currentScore;
  
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
      if (scores[activePlayer] >= 100) {
        playing = false;
        diceElem.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      } else {
        switchPlayer();
      }
    }
  });

  const closeModal = function () {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  };

  btnRules.addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
  });

  btnCloseRules.addEventListener('click', closeModal);

  document.querySelector('.overlay').addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
  
    if (e.key === 'Escape' && !document.querySelector('.modal').classList.contains('hidden')) {
      closeModal();
    }
  });