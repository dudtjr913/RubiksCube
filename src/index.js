import isInputValid from './input-valid.js';
import Cube from './class/cube.js';
import {
  createResultScreen,
  removeResultScreen,
  createFinishTextOnScreen,
} from './screen.js';
import {ERROR_MESSAGE, USER_INPUT} from './utils.js';

const cubeGame = new Cube();

export default function onSubmitUserInput() {
  if ($userInput.value === USER_INPUT.QUIT) {
    return finishGame(cubeGame.count);
  }

  const matchedInput = extractMatchedInput();
  if (isInputValid(matchedInput, $userInput.value)) {
    cubeGame.count += matchedInput.length;
    const requiredValue = changeNumberTwo(matchedInput);
    requiredValue.forEach((formula) => {
      startCubeTurn(formula);
      const joinedCube = createJoinedCube(cubeGame.cube);
      createResultScreen(joinedCube, formula);
    });
  }
  $userInput.value = '';
}

const extractMatchedInput = () => {
  const matchedInput = $userInput.value.match(
    /U'|D'|F'|B'|L'|R'|U|D|F|B|L|R|2/g,
  );

  return matchedInput;
};

const changeNumberTwo = (matchedInput) => {
  const convertedValue = matchedInput.map((value, index) => {
    return value === USER_INPUT.NUMBER ? matchedInput[index - 1] : value;
  });

  return convertedValue;
};

const startCubeTurn = (formula) => {
  switch (formula[0]) {
    case USER_INPUT.UP:
      cubeGame.turnUp(formula);
      break;
    case USER_INPUT.DOWN:
      cubeGame.turnDown(formula);
      break;
    case USER_INPUT.FRONT:
      cubeGame.turnFront(formula);
      break;
    case USER_INPUT.BACK:
      cubeGame.turnBack(formula);
      break;
    case USER_INPUT.LEFT:
      cubeGame.turnLeft(formula);
      break;
    case USER_INPUT.RIGHT:
      cubeGame.turnRight(formula);
      break;
    default:
      alert(ERROR_MESSAGE.WRONG_FOLMULA);
  }
};

const createJoinedCube = (cube) => {
  const joinedCube = cube.map((flatCube) =>
    flatCube.map((side) => side.join(' ')),
  );

  return joinedCube;
};

const finishGame = (count) => {
  $userForm.removeEventListener('submit', onSubmitUserInput);
  removeResultScreen();
  createFinishTextOnScreen(count);
};
