import {onSubmitUserInput, gameStart} from '../index.js';

export const $userForm = document.body.querySelector('form');
export const $userInput = $userForm.querySelector('input');
export const $mixCubeButton = document.body.querySelector('#mix-cube-btn');

$userForm.addEventListener('submit', onSubmitUserInput);
$mixCubeButton.addEventListener('click', gameStart);
