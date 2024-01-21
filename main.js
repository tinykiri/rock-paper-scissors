const playerPoints = document.querySelector('.playerPoints');
const computerPoints = document.querySelector('.computerPoints');
const result = document.querySelector('.result');
const movesLeft = document.querySelector('.movesLeft');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const allBtn = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.resetBtn');


const compOptions = ['rock', 'paper', 'scissors'];
const playerOptions = [rockBtn, paperBtn, scissorsBtn];

function randomMoveOfComputer(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

let computerScore = 0;
let playerScore = 0;
let moves = 0;

allBtn.forEach(function (btn) {
  btn.addEventListener('click', () => {
    const playerChoice = btn.value;
    const computerChoice = randomMoveOfComputer(compOptions);

    whoWins(playerChoice, computerChoice);

    moves++;
    movesLeft.textContent = 10 - moves;

    if (moves === 10) {
      gameOver();
    }
  })
});

function whoWins(player, computer) {
  if (player === computer) {
    result.textContent = 'Draw';
  } else if (player === 'rock') {
    if (computer === 'paper') {
      result.textContent = 'Computer won!';
      computerScore++;
      computerPoints.textContent = computerScore;
    } else {
      result.textContent = 'You won!';
      playerScore++;
      playerPoints.textContent = playerScore;
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      result.textContent = 'Computer won!';
      computerScore++;
      computerPoints.textContent = computerScore;
    } else {
      result.textContent = 'You won!';
      playerScore++;
      playerPoints.textContent = playerScore;
    }
  } else if (player === 'paper') {
    if (computer === 'scissors') {
      result.textContent = 'Computer won!';
      computerScore++;
      computerPoints.textContent = computerScore;
    } else {
      result.textContent = 'You won!';
      playerScore++;
      playerPoints.textContent = playerScore;
    }
  }
};

function gameOver() {
  if (playerScore > computerScore) {
    result.innerText = 'You Won The Game!';
  }
  else if (playerScore < computerScore) {
    result.innerText = 'You Lost The Game!';
  }
  else {
    result.innerText = 'Draw!';
  }
  resetBtn.innerText = 'Play again!';

  allBtn.forEach(each => {
    each.disabled = true;
    each.style.backgroundColor = '#ff6666';
    each.style.cursor = 'not-allowed';
    each.style.transform = 'scale(1)';
  })
};

resetBtn.addEventListener('click', () => {
  computerScore = 0;
  playerScore = 0;
  moves = 0;

  result.textContent = 'To start the game press any button ⬇️';
  playerPoints.textContent = '0';
  computerPoints.textContent = '0';
  movesLeft.textContent = '10';
  resetBtn.textContent = 'Reset';

  allBtn.forEach(each => {
    each.disabled = false;
    each.style.backgroundColor = '';
    each.style.cursor = '';
    each.style.transform = '';
  })
});