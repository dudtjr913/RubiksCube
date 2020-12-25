import {ERROR_MESSAGE, MAX_LENGTH} from './utils.js';

export default function isInputValid(matchedInput, userInput) {
  if (matchedInput === null || matchedInput.join('') !== userInput) {
    return alert(ERROR_MESSAGE.WRONG_INPUT);
  }

  if (matchedInput.length > MAX_LENGTH) {
    return alert(ERROR_MESSAGE.LESS_LENGTH);
  }

  return true;
}
