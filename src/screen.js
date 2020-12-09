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

export const createFinishTextOnScreen = (count) => {
  const $cubeContainer = document.body.querySelector('#cube');
  const $finishContainer = document.createElement('div');
  $finishContainer.innerHTML = `
  <div>조작갯수 : ${count}</div>
  <div>이용해주셔서 감사합니다. 뚜뚜뚜.</div>
  `;
  $cubeContainer.appendChild($finishContainer);
};
