// easy2-10.js

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
  let digits = string.split('').map(elements => DIGITS[elements]);

  let value = 0;
  digits.forEach(element => {
    value = (value * 10) + element;
  });
  return value;
}

function stringToSignedInteger(string) {
  if (string.includes('-')) {
    return stringToInteger(string.slice(1)) * -1;
  } else if (string.includes('+')) {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
