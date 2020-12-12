import {ERROR_MESSAGE, COMMON} from './utils.js';

export default function isUserInputValid(userInput) {
  if (!isInputLengthRight(userInput)) {
    return false;
  }
  if (!isInputFull(userInput)) {
    return false;
  }
  if (!isInputWord(userInput[0])) {
    return false;
  }
  if (!isInputScopeRight(userInput[1])) {
    return false;
  }
  if (!isInputLOrR(userInput[2])) {
    return false;
  }

  return true;
}

const isInputLengthRight = (userInput) => {
  if (userInput.length !== COMMON.SPACING_LENGTH) {
    return alert(ERROR_MESSAGE.SPACING);
  }

  return true;
};

const isInputFull = (userInput) => {
  if (userInput.some((input) => input === '')) {
    return alert(ERROR_MESSAGE.EMPTY);
  }

  return true;
};

const isInputWord = (userInput) => {
  if (userInput.match(/[^a-zA-Z]/)) {
    return alert(ERROR_MESSAGE.ANOTHER_WORD);
  }

  return true;
};

const isInputScopeRight = (userInput) => {
  if (!(userInput >= COMMON.MIN_SCOPE && userInput <= COMMON.MAX_SCOPE)) {
    return alert(ERROR_MESSAGE.SCOPE);
  }

  return true;
};

const isInputLOrR = (userInput) => {
  if (
    userInput.toUpperCase() !== COMMON.RIGHT &&
    userInput.toUpperCase() !== COMMON.LEFT
  ) {
    return alert(ERROR_MESSAGE.LEFT_AND_RIGHT);
  }

  return true;
};
