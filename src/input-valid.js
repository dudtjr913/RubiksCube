export default function isInputValid(matchedInput, userInput) {
  if (matchedInput === null || matchedInput.join('') !== userInput) {
    return alert("L, L', R, R', U, U', B, B' 중에서 입력해주세요.");
  }

  if (matchedInput.length > 20) {
    return alert('20개 이하로 입력해주세요.');
  }

  return true;
}
