import gameStart from '../index.js';
import {START_MESSAGE} from '../controller/utils.js';

export const $userForm = document.body.querySelector('form');
export const $userInput = $userForm.querySelector('input');
export const $mixCubeButton = document.body.querySelector('#mix-cube-btn');

$mixCubeButton.addEventListener('click', () => {
  const startConfirm = confirm(START_MESSAGE);
  startConfirm && gameStart();
});
