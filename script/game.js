const getClick = document.querySelector('#content-game');
const paper = document.querySelector('[data-paper]');
const rock = document.querySelector('[data-rock]');

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const changeScoreboard = (value) => {
  const scoreboard = document.querySelector('[data-score]');

  if(value) {
    return scoreboard.innerHTML = ++scoreboard.textContent; 
  }

  return scoreboard.innerHTML = --scoreboard.textContent;
};

const changeResult = (resultLabel) => {
  const result = document.querySelector('[data-result]');
  result.innerHTML = resultLabel;
}

getClick.addEventListener('click', (event) => {
  let randomValue = getRndInteger(3, 0);
  let value = event.target;

  const result = document.querySelector('#content-result');
  result.classList.remove('rock-paper-scissors__content-result--invisible');
  const game = document.querySelector('#content-game');
  game.classList.add('rock-paper-scissors__content-game--invisible');

  const picked = document.querySelector('[data-picked]');
  const computerPicked = document.querySelector('[data-computer]');

  if(randomValue === 1) {
    computerPicked.className = '';
    const classAdd = ['rock-paper-scissors__card', 'rock-paper-scissors__card--rock']
    computerPicked.classList.add(...classAdd);
    const rockImage = '<img class="rock-paper-scissors__card-image" src="./images/icon-rock.svg" alt="rock-image">'
    computerPicked.innerHTML = rockImage;
  } else if(randomValue === 2) {
    computerPicked.className = '';
    const classAdd = ['rock-paper-scissors__card', 'rock-paper-scissors__card--paper']
    computerPicked.classList.add(...classAdd);
    const rockImage = '<img class="rock-paper-scissors__card-image" src="./images/icon-paper.svg" alt="paper-image">'
    computerPicked.innerHTML = rockImage;
  } else {
    computerPicked.className = '';
    const classAdd = ['rock-paper-scissors__card', 'rock-paper-scissors__card--scissors']
    computerPicked.classList.add(...classAdd);
    const rockImage = '<img class="rock-paper-scissors__card-image" src="./images/icon-scissors.svg" alt="scissors-image">'
    computerPicked.innerHTML = rockImage;
  }

  if(value === paper) {
    picked.className = '';
    const classAdd = ['rock-paper-scissors__card', 'rock-paper-scissors__card--paper']
    picked.classList.add(...classAdd);
    const rockImage = '<img class="rock-paper-scissors__card-image" src="./images/icon-paper.svg" alt="paper-image">'
    picked.innerHTML = rockImage;

    if(randomValue === 1) {
      changeResult('YOU WIN');
      changeScoreboard(1);
    } else if(randomValue === 2) {
      changeResult('TIED');
    } else {
      changeResult('YOU LOSE');
      changeScoreboard(0);
    }
  } else if (value === rock) {
    picked.className = '';
    const classAdd = ['rock-paper-scissors__card', 'rock-paper-scissors__card--rock']
    picked.classList.add(...classAdd);
    const rockImage = '<img class="rock-paper-scissors__card-image" src="./images/icon-rock.svg" alt="rock-image">'
    picked.innerHTML = rockImage;

    if(randomValue === 1) {
      changeResult('TIED');
    } else if(randomValue === 2) {
      changeResult('YOU LOSE');
      changeScoreboard(0);
    } else {
      changeResult('YOU WIN');
      changeScoreboard(1);
    }
  } else {
    picked.className = '';
    const classAdd = ['rock-paper-scissors__card', 'rock-paper-scissors__card--scissors']
    picked.classList.add(...classAdd);
    const rockImage = '<img class="rock-paper-scissors__card-image" src="./images/icon-scissors.svg" alt="scissors-image">'
    picked.innerHTML = rockImage;

    if(randomValue === 1) {
      changeResult('YOU LOSE');
      changeScoreboard(0);
    } else if(randomValue === 2) {
      changeResult('YOU WIN');
      changeScoreboard(1);
    } else {
      changeResult('TIED');
    }
  }
});