import onSubmitUserInput from '../index.js';

const $userForm = document.body.querySelector('form');
const $userInput = $userForm.querySelector('input');

$userForm.addEventListener('submit', onSubmitUserInput);
