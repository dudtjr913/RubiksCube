import {FINISH_MESSAGE} from '../controller/utils.js';

export const createResultScreen = (cube, formula) => {
  const $screenUl = document.body.querySelector('#cube-list');
  const $screenLi = document.createElement('li');
  $screenLi.innerHTML = `
    <pre>
  공식 : ${formula}
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
  $screenUl.appendChild($screenLi);
};

export const removeResultScreen = () => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $screenUl = document.body.querySelector('#cube-list');
  $cubeContainer.removeChild($screenUl);
};

export const createFinishTextOnScreen = (count, elapsedTime) => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $finishContainer = document.createElement('div');
  const convertedTime = convertTime(elapsedTime);
  $finishContainer.innerHTML = `
  <div>경과시간 : ${convertedTime.minutes} : ${convertedTime.seconds}</div>
  <div>${FINISH_MESSAGE.TURN_COUNT} ${count}</div>
  <div>${FINISH_MESSAGE.THANK_MESSAGE}</div>
  `;
  $cubeContainer.appendChild($finishContainer);
};

const convertTime = (time) => {
  const minutes =
    parseInt(time / 60) >= 10
      ? parseInt(time / 60) % 60
      : `0${parseInt(time / 60)}`;
  const seconds = time >= 10 ? time % 60 : `0${time}`;

  return {minutes, seconds};
};
