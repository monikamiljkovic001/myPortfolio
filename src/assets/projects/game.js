const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('current--0');
const currentScore1 = document.querySelector('current--1');

const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.getElementById(`name--${activePlayer}`).textContent = 'You won';
  } else {
    switchPlayer();
  }
});
newGame.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
});
