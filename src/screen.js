export const createResultScreen = (cubeGame, side) => {
  const $cubeUl = document.body.querySelector('#cube-list');
  const $cubeLi = document.createElement('li');

  $cubeLi.style.marginTop = '15px';
  $cubeLi.innerHTML = `<b>${side}</b>`;

  cubeGame.cube.forEach((cube) => {
    $cubeLi.innerHTML += `<div>${cube.join(' ')}</div>`;
  });

  $cubeUl.appendChild($cubeLi);
};

export const removeResultScreen = () => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $cubeUl = document.body.querySelector('#cube-list');
  $cubeContainer.removeChild($cubeUl);
};

export const createFinishScreen = () => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $finishText = document.createElement('div');
  $finishText.textContent = 'Bye~';
  $cubeContainer.appendChild($finishText);
};
