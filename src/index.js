import isInputValid from './input-valid.js';

const $userForm = document.body.querySelector('form');
const $userInput = $userForm.querySelector('input');

const onSubmitUserInput = () => {
  const matchedInput = extractMatchedInput();
  if (isInputValid(matchedInput, $userInput.value)) {
    console.log('success');
  }
};

const extractMatchedInput = () => {
  const matchedInput = $userInput.value.match(
    /U'|D'|F'|B'|L'|R'|U|D|F|B|L|R|2/g,
  );

  return matchedInput;
};

$userForm.addEventListener('submit', onSubmitUserInput);
