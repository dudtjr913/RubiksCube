import {USER_INPUT} from '../utils.js';

export const extractMatchedInput = (userInput) => {
  const matchedInput = userInput.match(/U'|D'|F'|B'|L'|R'|U|D|F|B|L|R|2/g);

  return matchedInput;
};

export const changeNumberTwo = (matchedInput) => {
  const convertedValue = matchedInput.map((value, index) => {
    return value === USER_INPUT.NUMBER ? matchedInput[index - 1] : value;
  });

  return convertedValue;
};
