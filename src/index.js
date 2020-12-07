'use strict';

const $cubeForm = document.body.querySelector('form');
const $cubeInput = $cubeForm.querySelector('input');

const onSubmitUserInput = () => {
  if (!isUserInputValid()) {
    return ($cubeInput.value = '');
  }
};

const isUserInputValid = () => {
  const splitedInput = $cubeInput.value.split(' ');
  if (splitedInput.length !== 3) {
    return alert('띄어쓰기로 구분하여 단어 정수 L/R 형식으로 입력해주세요.');
  }
  if (splitedInput[0].match(/\W/)) {
    return alert('영어 단어를 입력해주세요.');
  }
  if (!(splitedInput[1] >= -100 && splitedInput[1] < 100)) {
    return alert('-100 ~ 99까지의 정수를 입력해주세요.');
  }
  if (splitedInput[2].match(/[^lr]/i)) {
    return alert('L(l) 또는 R(r)을 입력해주세요.');
  }

  return true;
};

$cubeForm.addEventListener('submit', onSubmitUserInput);
