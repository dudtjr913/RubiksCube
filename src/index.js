import isUserInputValid from './input-valid.js';
import pushUserSelectedWord from './push-word.js';

(function () {
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
