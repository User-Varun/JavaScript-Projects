'use strict';

const player0TotalScore = document.querySelector('.player-0-total-score');
const player1TotalScore = document.querySelector('.player-1-total-score');
const player0CurrentScore = document.querySelector('.player-0-current-score');
const player1CurrentScore = document.querySelector('.player-1-current-score');
const diceImage = document.querySelector('.dice-img');
const rollDiceBtn = document.querySelector('.roll-dice-btn');

// things to do when game starts
player0TotalScore.textContent = 0;
player1TotalScore.textContent = 0;
diceImage.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

rollDiceBtn.addEventListener('click', function () {
  // generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // display the dice
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // if dice roll is 1 (add the score to current user score)
    currentScore += dice;
    document.querySelector(
      `.player-${activePlayer}-current-score`
    ).textContent = currentScore;
  } else {
    // switch to next player
    document.querySelector(
      `.player-${activePlayer}-current-score`
    ).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    document
      .querySelector('.player-0')
      .classList.toggle('active-player-indicator-color');
    document
      .querySelector('.player-1')
      .classList.toggle('active-player-indicator-color');
  }
});
