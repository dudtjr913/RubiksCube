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
  if (userInput.length !== 3) {
    return alert('띄어쓰기로 구분하여 단어 정수 L/R 형식으로 입력해주세요.');
  }

  return true;
};

const isInputFull = (userInput) => {
  if (userInput.some((input) => input === '')) {
    return alert('빈 칸은 입력할 수 없습니다.');
  }

  return true;
};

const isInputWord = (userInput) => {
  if (userInput.match(/[^a-zA-Z]/)) {
    return alert('영어 단어를 입력해주세요.');
  }

  return true;
};

const isInputScopeRight = (userInput) => {
  if (!(userInput >= -100 && userInput < 100)) {
    return alert('-100 ~ 99까지의 정수를 입력해주세요.');
  }

  return true;
};

const isInputLOrR = (userInput) => {
  if (userInput.toUpperCase() !== 'R' && userInput.toUpperCase() !== 'L') {
    return alert('L(l) 또는 R(r)을 입력해주세요.');
  }

  return true;
};
