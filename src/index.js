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
};

const matchUserInput = (userInput) => {
  const matchedUserInput = userInput.match(/U'|U|R'|R|L'|L|B'|B/g);

  return matchedUserInput;
};

$cubeForm.addEventListener('submit', onSubmitUserInput);
