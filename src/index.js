import Cube from './model/cube.js';
import {
  createInitialScreen,
  createResultScreen,
  removeResultScreen,
  createFinishTextOnScreen,
} from './view/output.js';
import {$userForm, $userInput} from './view/input.js';
import isInputValid from './controller/input/valid.js';
import {
  extractMatchedInput,
  changeNumberTwo,
} from './controller/input/convert.js';
import {
  ERROR_MESSAGE,
  USER_INPUT,
  CUBE_SIDE,
  MIX_COUNT,
  CUBE_COLOR,
} from './controller/utils.js';

let cubeGame = null;
let startTime = null;

export default function gameStart() {
  cubeGame = new Cube();
  startTime = new Date().getTime();
  removeResultScreen();
  mixCube();
  $userInput.value = '';
  $userForm.addEventListener('submit', onSubmitUserInput);
}

const mixCube = () => {
  const randomFormula = createRandomFormula();
  randomFormula.forEach((formula) => startCubeTurn(formula));
  const joinedCube = createJoinedCube();
  createInitialScreen(joinedCube);
};

const createRandomFormula = () => {
  const formula = [];
  while (formula.length < MIX_COUNT) {
    const randomIndex = Math.floor(Math.random() * CUBE_SIDE.length);
    formula.push(CUBE_SIDE[randomIndex]);
  }

  return formula;
};

const onSubmitUserInput = () => {
  if ($userInput.value === USER_INPUT.QUIT) {
    return finishGame(cubeGame.count);
  }

  const matchedInput = extractMatchedInput($userInput.value);
  if (isInputValid(matchedInput, $userInput.value)) {
    cubeGame.count += matchedInput.length;
    const requiredValue = changeNumberTwo(matchedInput);
    requiredValue.forEach((formula) => {
      startCubeTurn(formula);
      const joinedCube = createJoinedCube();
      createResultScreen(joinedCube, formula);
    });
    isGameFinish() && finishGame(cubeGame.count);
  }
  $userInput.value = '';
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

const createJoinedCube = () => {
  const joinedCube = cubeGame.cube.map((flatCube) =>
    flatCube.map((side) => side.join(' ')),
  );

  return joinedCube;
};

const finishGame = (count) => {
  const elapsedTime = (new Date().getTime() - startTime) / 1000;
  $userForm.removeEventListener('submit', onSubmitUserInput);
  removeResultScreen();
  createFinishTextOnScreen(count, elapsedTime.toFixed(0));
};

// 게임이 끝났는지 확인하는 함수 - 큐브의 row까지 들어가서
// 9개의 배열이 모두 한가지 색으로 채워져 있는지 검사
const isGameFinish = () => {
  const differentColor = cubeGame.cube.find((flatCube, index) =>
    flatCube.find((row) => !row.includes(CUBE_COLOR[index])),
  );

  return !differentColor;
};
