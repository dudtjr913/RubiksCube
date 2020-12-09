import isInputValid from './input-valid.js';
import Cube from './class/cube.js';

const $userForm = document.body.querySelector('form');
const $userInput = $userForm.querySelector('input');
const cubeGame = new Cube();

const onSubmitUserInput = () => {
  const matchedInput = extractMatchedInput();
  if (isInputValid(matchedInput, $userInput.value)) {
    const requiredValue = changeNumberTwo(matchedInput);
    requiredValue.forEach((formula) => startCubeTurn(formula));
  }
};

const extractMatchedInput = () => {
  const matchedInput = $userInput.value.match(
    /U'|D'|F'|B'|L'|R'|U|D|F|B|L|R|2/g,
  );

  return matchedInput;
};

const changeNumberTwo = (matchedInput) => {
  const convertedValue = matchedInput.map((value, index) => {
    return value === '2' ? matchedInput[index - 1] : value;
  });

  return convertedValue;
};

const startCubeTurn = (formula) => {
  switch (formula[0]) {
    case 'U':
      cubeGame.turnUp(formula);
      break;
    case 'D':
      cubeGame.turnDown(formula);
      break;
    case 'F':
      cubeGame.turnFront(formula);
      break;
    case 'B':
      cubeGame.turnBack(formula);
      break;
    case 'L':
      cubeGame.turnLeft(formula);
      break;
    case 'R':
      cubeGame.turnRight(formula);
      break;
    default:
      alert('올바르지 않은 공식입니다.');
  }
};

$userForm.addEventListener('submit', onSubmitUserInput);
