import onSubmitUserInput from '../index.js';

export const $userForm = document.body.querySelector('form');
export const $userInput = $userForm.querySelector('input');

$userForm.addEventListener('submit', onSubmitUserInput);
