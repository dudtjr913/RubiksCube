const $userForm = document.body.querySelector('form');
const $userInput = $userForm.querySelector('input');

const onSubmitUserInput = () => {
  console.log($userInput.value);
};

$userForm.addEventListener('submit', onSubmitUserInput);
