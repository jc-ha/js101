// easy2-11.js

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let stringDigits = [];

  do {
    let digits = integer % 10;
    stringDigits.push(DIGITS[digits]);
    
    integer = (integer - digits) / 10;
  } while (integer > 0);

  return stringDigits.reverse().join('');
}

function integerToString1(integer) {
  let result = '';

  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);

    result = DIGITS[remainder] + result;
  } while (integer > 0);

  return result;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"
console.log(integerToString1(4321));      // "4321"
console.log(integerToString1(0));         // "0"
console.log(integerToString1(5000));      // "5000"
console.log(integerToString1(1234567890));      // "1234567890"
