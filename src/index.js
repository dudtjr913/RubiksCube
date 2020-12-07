import Cube from './class/cube.js';
import isInputValid from './input-valid.js';

const cubeGame = new Cube();
const $cubeForm = document.body.querySelector('form');
const $cubeInput = $cubeForm.querySelector('input');

const onSubmitUserInput = () => {
  const matchedUserInput = matchUserInput($cubeInput.value);
  if (!isInputValid(matchedUserInput, $cubeInput.value)) {
    return ($cubeInput.value = '');
  }
  matchedUserInput.forEach((position) => {
    moveCube(position);
    createOnScreen(position);
  });
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
  const $cubeContainer = document.body.querySelector('#cube');
  const $cubeSection = document.createElement('div');

  $cubeSection.style.marginTop = '15px';
  $cubeSection.innerHTML = `<span>${position}</span>`;

  cubeGame.cube.forEach((cube) => {
    $cubeSection.innerHTML += `
      <div>${cube.join(' ')}</div>
      `;
  });
  $cubeContainer.appendChild($cubeSection);
};

$cubeForm.addEventListener('submit', onSubmitUserInput);
