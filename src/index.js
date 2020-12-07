import isUserInputValid from './input-valid.js';

const startCubeGame = (function () {
  const $cubeForm = document.body.querySelector('form');
  const $cubeInput = $cubeForm.querySelector('input');

  const onSubmitUserInput = () => {
    const splitedInput = $cubeInput.value.split(' ');
    if (!isUserInputValid(splitedInput)) {
      return ($cubeInput.value = '');
    }
    const pushedWordResult = pushUserSelectedWord(splitedInput);
    printResultOnScreen($cubeInput.value, pushedWordResult);

    return ($cubeInput.value = '');
  };

  const pushUserSelectedWord = (splitedInput) => {
    const [word, count, direction] = splitedInput;
    const upperCaseDirection = direction.toUpperCase();
    const remainsCount = count % word.length; // 나머지 숫자
    if (
      (count >= 0 && upperCaseDirection === 'L') ||
      (count < 0 && upperCaseDirection === 'R')
    ) {
      return pushWordLeft(word, Math.abs(remainsCount));
    }

    if (
      (count >= 0 && upperCaseDirection === 'R') ||
      (count < 0 && upperCaseDirection === 'L')
    ) {
      return pushWordRight(word, Math.abs(remainsCount));
    }
  };

  const pushWordLeft = (word, count) => {
    const splitedWord = word.split('');
    const pushedWord = splitedWord.splice(0, count);
    const result = [...splitedWord, ...pushedWord];

    return result.join('');
  };

  const pushWordRight = (word, count) => {
    const splitedWord = word.split('');
    const pushedWord = splitedWord.splice(word.length - count);
    const result = [...pushedWord, ...splitedWord];

    return result.join('');
  };

  const printResultOnScreen = (userInput, resultWord) => {
    const $cubeContainer = document.body.querySelector('#cube');
    const $userInputText = document.createElement('div');
    const $resultText = document.createElement('div');

    $userInputText.textContent = `> ${userInput}`;
    $resultText.textContent = `${resultWord}`;
    $userInputText.style.marginTop = '15px';

    $cubeContainer.appendChild($userInputText);
    $cubeContainer.appendChild($resultText);
  };

  $cubeForm.addEventListener('submit', onSubmitUserInput);
})();
