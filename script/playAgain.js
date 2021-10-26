const buttonPlayAgain = document.getElementById('play-again');
const playAgain = (event) => {
  event.preventDefault();
  const result = document.querySelector('#content-result');
  result.classList.add('rock-paper-scissors__content-result--invisible');
  const game = document.querySelector('#content-game')
  game.classList.remove('rock-paper-scissors__content-game--invisible')
};

buttonPlayAgain.addEventListener('click', playAgain);