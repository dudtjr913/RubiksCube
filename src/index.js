import isInputValid from './controller/input/valid.js';
import {
  extractMatchedInput,
  changeNumberTwo,
} from './controller/input/convert.js';
import Cube from './model/cube.js';
import {
  createResultScreen,
  removeResultScreen,
  createFinishTextOnScreen,
} from './view/output.js';
import {ERROR_MESSAGE, USER_INPUT} from './utils.js';
import {$userForm, $userInput} from './view/input.js';

const cubeGame = new Cube();

export default function onSubmitUserInput() {
  if ($userInput.value === USER_INPUT.QUIT) {
    return finishGame(cubeGame.count);
  }

  const matchedInput = extractMatchedInput($userInput.value);
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
