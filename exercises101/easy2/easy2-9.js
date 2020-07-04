// easy2-9.js

/*function stringToInteger(string) {
  return string - 0;
}*/

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToInteger(string) {
  let array = [];
  for (let index = 0; index < string.length; index += 1) {
    array.push(DIGITS[string[index]]);
  }

  let number = 0;
  for (let counter = 0; counter < array.length; counter += 1) {
    number = (number * 10) + array[counter];
  }

  return number;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

const HEXADECIMALS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function hexadecimalToInteger(string) {
  let digits =
  string.toUpperCase().split('').map(elements => HEXADECIMALS[elements]);

  let value = 0;
  digits.forEach(element => {
    value = (value * 16) + element;
  });
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
