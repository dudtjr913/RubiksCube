import Cube from './class/cube.js';
import isInputValid from './input-valid.js';
import {cubeSide, QUIT_INPUT} from './utils.js';
import {
  createFinishScreen,
  createResultScreen,
  removeResultScreen,
} from './screen.js';

const cubeGame = new Cube();
const $cubeForm = document.body.querySelector('form');
const $cubeInput = $cubeForm.querySelector('input');

const onSubmitUserInput = () => {
  const matchedUserInput = matchUserInput($cubeInput.value);
  if ($cubeInput.value === QUIT_INPUT) {
    return finishGame();
  }
  if (isInputValid(matchedUserInput, $cubeInput.value)) {
    matchedUserInput.forEach((side) => {
      moveCube(side);
      createResultScreen(cubeGame, side);
    });
  }

  return ($cubeInput.value = '');
};

const matchUserInput = (userInput) => {
  const matchedUserInput = userInput.match(/U'|U|R'|R|L'|L|B'|B/g);

  return matchedUserInput;
};

const moveCube = (side) => {
  if (side === cubeSide.UP_LEFT || side === cubeSide.UP_RIGHT) {
    return cubeGame.moveUp(side);
  }
  if (side === cubeSide.DOWN_LEFT || side === cubeSide.DOWN_RIGHT) {
    return cubeGame.moveDown(side);
  }
  if (side === cubeSide.LEFT_UP || side === cubeSide.LEFT_DOWN) {
    return cubeGame.moveLeft(side);
  }
  if (side === cubeSide.RIGHT_UP || side === cubeSide.RIGHT_DOWN) {
    return cubeGame.moveRight(side);
  }
};

const finishGame = () => {
  $cubeForm.removeEventListener('submit', onSubmitUserInput);
  removeResultScreen();
  createFinishScreen();
};

$cubeForm.addEventListener('submit', onSubmitUserInput);
