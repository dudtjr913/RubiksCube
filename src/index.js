import Cube from './class/cube.js';
import isInputValid from './input-valid.js';

const cubeGame = new Cube();
const $cubeForm = document.body.querySelector('form');
const $cubeInput = $cubeForm.querySelector('input');

const onSubmitUserInput = () => {
  const matchedUserInput = matchUserInput($cubeInput.value);
  if ($cubeInput.value === 'Q') {
    return finishGame();
  }
  if (isInputValid(matchedUserInput, $cubeInput.value)) {
    matchedUserInput.forEach((position) => {
      moveCube(position);
      createOnScreen(position);
    });
  }

  return ($cubeInput.value = '');
};

const matchUserInput = (userInput) => {
  const matchedUserInput = userInput.match(/U'|U|R'|R|L'|L|B'|B/g);

  return matchedUserInput;
};

const moveCube = (position) => {
  if (position === 'U' || position === "U'") {
    return cubeGame.moveUp(position);
  }
  if (position === 'B' || position === "B'") {
    return cubeGame.moveDown(position);
  }
  if (position === 'L' || position === "L'") {
    return cubeGame.moveLeft(position);
  }
  if (position === 'R' || position === "R'") {
    return cubeGame.moveRight(position);
  }
};

const createOnScreen = (position) => {
  const $cubeUl = document.body.querySelector('#cube-list');
  const $cubeLi = document.createElement('li');

  $cubeLi.style.marginTop = '15px';
  $cubeLi.innerHTML = `<b>${position}</b>`;

  cubeGame.cube.forEach((cube) => {
    $cubeLi.innerHTML += `<div>${cube.join(' ')}</div>`;
  });

  $cubeUl.appendChild($cubeLi);
};

const finishGame = () => {
  $cubeForm.removeEventListener('submit', onSubmitUserInput);
  createFinishScreen();
};

const createFinishScreen = () => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $finishText = document.createElement('div');
  $finishText.textContent = 'Bye~';
  $cubeContainer.appendChild($finishText);
};

$cubeForm.addEventListener('submit', onSubmitUserInput);
