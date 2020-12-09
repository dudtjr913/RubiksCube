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
