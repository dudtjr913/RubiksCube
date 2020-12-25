import {ERROR_MESSAGE, MAX_LENGTH} from '../utils.js';

const isInputValid = (matchedInput, userInput) => {
  if (!matchedInput || userInput !== matchedInput.join('')) {
    return alert(ERROR_MESSAGE.WRONG_INPUT);
  }
  if (matchedInput.length > MAX_LENGTH) {
    return alert(ERROR_MESSAGE.LENGTH_LIMIT);
  }

  return true;
};

export default isInputValid;
