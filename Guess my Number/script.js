'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const bodyElem = document.querySelector('body');
const numberElem = document.querySelector('.number');
const highscoreElem = document.querySelector('.highscore');
const scoreElem = document.querySelector('.score');
const guessElem = document.querySelector('.guess');
const messageElem = document.querySelector('.message');
const checkElem = document.querySelector('.check');
const againElem = document.querySelector('.again');

const displayMessage = function (message) {
  messageElem.textContent = message;
};

checkElem.addEventListener('click', function () {
  const guess = Number(guessElem.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElem.textContent = secretNumber;

    bodyElem.style.backgroundColor = '#60b347';
    numberElem.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreElem.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreElem.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreElem.textContent = 0;
    }
  }
});

againElem.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreElem.textContent = score;
  numberElem.textContent = '?';
  guessElem.value = '';

  bodyElem.style.backgroundColor = '#222';
  numberElem.style.width = '15rem';
});