import isInputValid from './input-valid.js';

const $userForm = document.body.querySelector('form');
const $userInput = $userForm.querySelector('input');

const onSubmitUserInput = () => {
  const matchedInput = extractMatchedInput();
  if (isInputValid(matchedInput, $userInput.value)) {
    const requiredValue = changeNumberTwo(matchedInput);
  }
};

const extractMatchedInput = () => {
  const matchedInput = $userInput.value.match(
    /U'|D'|F'|B'|L'|R'|U|D|F|B|L|R|2/g,
  );

  return matchedInput;
};

const changeNumberTwo = (matchedInput) => {
  const convertedValue = matchedInput.map((value, index) => {
    return value === '2' ? matchedInput[index - 1] : value;
  });

  return convertedValue;
};

$userForm.addEventListener('submit', onSubmitUserInput);
