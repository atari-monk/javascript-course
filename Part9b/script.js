'use strict';

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;

function getSecretNumber() {
  return Math.trunc(Math.random() * 19) + 1;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = getGuess();

  if (!guess) {
    setMessage('⛔ No Number');
  }
  else if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setWinStyle();
    if (score > highscore) {
      highscore = score;
      setText('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('💥 You lost the game!');
      setScore(0);
    }
  }
})

function getGuess() {
  return Number(document.querySelector('.guess').value);
}

function setGuess(value) {
  document.querySelector('.guess').value = value;
}

function setText(className, value) {
  document.querySelector(className).textContent = value;
}

function setMessage(value) { setText('.message', value); }

function setNumber(value) { setText('.number', value); }

function setScore(value) { setText('.score', value); }

function setWinStyle() {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getSecretNumber();
  score = 20;
  setScore(score);
  setGuess('');
  setMessage('Start guessing...');
  setNumber('?');
  resetStyle();
})

function resetStyle() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}