import Cube from './class/cube.js';
import isInputValid from './input-valid.js';
import {cubeSide} from './utils.js';

const cubeGame = new Cube();
const $cubeForm = document.body.querySelector('form');
const $cubeInput = $cubeForm.querySelector('input');

const onSubmitUserInput = () => {
  const matchedUserInput = matchUserInput($cubeInput.value);
  if ($cubeInput.value === 'Q') {
    return finishGame();
  }
  if (isInputValid(matchedUserInput, $cubeInput.value)) {
    matchedUserInput.forEach((side) => {
      moveCube(side);
      createOnScreen(side);
    });
  }

  return ($cubeInput.value = '');
};

const matchUserInput = (userInput) => {
  const matchedUserInput = userInput.match(/U'|U|R'|R|L'|L|B'|B/g);

  return matchedUserInput;
};

const moveCube = (side) => {
  if (side === cubeSide.UPLEFT || side === cubeSide.UPRIGHT) {
    return cubeGame.moveUp(side);
  }
  if (side === cubeSide.DOWNLEFT || side === cubeSide.DOWNRIGHT) {
    return cubeGame.moveDown(side);
  }
  if (side === cubeSide.LEFTUP || side === cubeSide.LEFTDOWN) {
    return cubeGame.moveLeft(side);
  }
  if (side === cubeSide.RIGHTUP || side === cubeSide.RIGHTDOWN) {
    return cubeGame.moveRight(side);
  }
};

const createOnScreen = (side) => {
  const $cubeUl = document.body.querySelector('#cube-list');
  const $cubeLi = document.createElement('li');

  $cubeLi.style.marginTop = '15px';
  $cubeLi.innerHTML = `<b>${side}</b>`;

  cubeGame.cube.forEach((cube) => {
    $cubeLi.innerHTML += `<div>${cube.join(' ')}</div>`;
  });

  $cubeUl.appendChild($cubeLi);
};

const finishGame = () => {
  $cubeForm.removeEventListener('submit', onSubmitUserInput);
  removeResultScreen();
  createFinishScreen();
};

const removeResultScreen = () => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $cubeUl = document.body.querySelector('#cube-list');
  $cubeContainer.removeChild($cubeUl);
};

const createFinishScreen = () => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $finishText = document.createElement('div');
  $finishText.textContent = 'Bye~';
  $cubeContainer.appendChild($finishText);
};

$cubeForm.addEventListener('submit', onSubmitUserInput);
