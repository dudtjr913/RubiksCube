import {COMMON} from './utils.js';

export default function pushUserSelectedWord(splitedInput) {
  const [word, count, direction] = splitedInput;
  const upperCaseDirection = direction.toUpperCase();
  const remainsCount = count % word.length; // 나머지 숫자
  if (
    (count >= 0 && upperCaseDirection === COMMON.LEFT) ||
    (count < 0 && upperCaseDirection === COMMON.RIGHT)
  ) {
    return pushWordLeft(word, Math.abs(remainsCount));
  }

  if (
    (count >= 0 && upperCaseDirection === COMMON.RIGHT) ||
    (count < 0 && upperCaseDirection === COMMON.LEFT)
  ) {
    return pushWordRight(word, Math.abs(remainsCount));
  }
}

export const pushWordLeft = (word, count) => {
  const splitedWord = word.split('');
  const pushedWord = splitedWord.splice(0, count);
  const result = [...splitedWord, ...pushedWord];

  return result.join('');
};

export const pushWordRight = (word, count) => {
  const splitedWord = word.split('');
  const pushedWord = splitedWord.splice(word.length - count);
  const result = [...pushedWord, ...splitedWord];

  return result.join('');
};
