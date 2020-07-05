// easy2-12.js

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let result = '';

  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);

    result = DIGITS[remainder] + result;
  } while (integer > 0);

  return result;
}

function signedIntegerToString1(integer) {
  if (Math.sign(integer) === -1) {
    integer = 0 - integer;
    return ('-' + integerToString(integer));
  } else if (Math.sign(integer) === 1) {
    return ('+' + integerToString(integer));
  } else {
    return integerToString(integer);
  }
}

function signedIntegerToString2(integer) {
  switch (Math.sign(integer)) {
    case -1:
      return `-${integerToString(-integer)}`;
    case 1:
      return `+${integerToString(integer)}`;
    default:
      return integerToString(integer);
  }
}

function signedIntegerToString(integer) {
  if (integer < 0) return `-${integerToString(-integer)}`;

  if (integer > 0) return `+${integerToString(integer)}`;

  return '0';
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
