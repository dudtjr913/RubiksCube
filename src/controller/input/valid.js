import {ERROR_MESSAGE} from '../../utils.js';

const isInputValid = (matchedInput, userInput) => {
  if (!matchedInput || userInput !== matchedInput.join('')) {
    return alert(ERROR_MESSAGE.WRONG_INPUT);
  }
  if (matchedInput.length > 20) {
    return alert(ERROR_MESSAGE.LENGTH_LIMIT);
  }

  return true;
};

export default isInputValid;
