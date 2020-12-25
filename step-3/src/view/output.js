import createCube from '../controller/cube/create.js';
import {FINISH_MESSAGE} from '../controller/utils.js';

export const createInitialScreen = (cube) => {
  const $cubeShape = document.body.querySelector('#cube-shape');
  $cubeShape.innerHTML = createCubeShape(cube);
};

export const createResultScreen = (cube, formula) => {
  const $screenUl = document.body.querySelector('#cube-list');
  const $screenLi = document.createElement('li');
  $screenLi.innerHTML = createCubeShape(cube, formula);
  $screenUl.appendChild($screenLi);
};

const createCubeShape = (cube, formula) => {
  return `    
    <pre>
  ${formula ? `공식 : ${formula}` : ''}
                 ${cube[0][0]}
                 ${cube[0][1]}
                 ${cube[0][2]}

  ${cube[1][0]}     ${cube[2][0]}     ${cube[3][0]}     ${cube[4][0]}
  ${cube[1][1]}     ${cube[2][1]}     ${cube[3][1]}     ${cube[4][1]}
  ${cube[1][2]}     ${cube[2][2]}     ${cube[3][2]}     ${cube[4][2]}

                 ${cube[5][0]}
                 ${cube[5][1]}
                 ${cube[5][2]}
    </pre>
    `;
};

export const removeResultScreen = () => {
  const $screenUl = document.body.querySelector('#cube-list');
  const $resultContainer = document.body.querySelector('#result');
  while ($screenUl.firstChild) {
    $screenUl.removeChild($screenUl.firstChild);
  }
  while ($resultContainer.firstChild) {
    $resultContainer.removeChild($resultContainer.firstChild);
  }
};

export const createFinishTextOnScreen = (count, elapsedTime, win) => {
  const {ELAPSE_TIME, TURN_COUNT, WIN_MESSAGE, THANK_MESSAGE} = FINISH_MESSAGE;
  const $finishContainer = document.body.querySelector('#result');
  const convertedTime = convertTime(elapsedTime);
  $finishContainer.innerHTML = `
  <div>${ELAPSE_TIME} ${convertedTime.minutes} : ${convertedTime.seconds}</div>
  <div>${TURN_COUNT} ${count}</div>
  <div>${win ? WIN_MESSAGE : THANK_MESSAGE}</div>
  `;
};

const convertTime = (time) => {
  const convertedMinutes = parseInt(time / 60) % 60;
  const convertedSeconds = time % 60;
  const minutes =
    convertedMinutes >= 10 ? convertedMinutes : `0${convertedMinutes}`;
  const seconds =
    convertedSeconds >= 10 ? convertedSeconds : `0${convertedSeconds}`;

  return {minutes, seconds};
};
