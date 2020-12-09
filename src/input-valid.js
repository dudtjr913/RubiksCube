export default function isInputValid(matchedInput, userInput) {
  if (!matchedInput || userInput !== matchedInput.join('')) {
    return alert("2, U('), D('), F('), B('), R('), L(')만 입력할 수 있습니다.");
  }
  if (matchedInput.length > 20) {
    return alert('20개 이하로 입력해주세요.');
  }

  return true;
}
