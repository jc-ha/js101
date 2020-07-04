// easy2-4.js

function multiply(num1, num2) {
  return num1 * num2;
}
/*
function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true*/

function powerToTheExp(number, exp) {
  let total = number;

  for (let counter = 2; counter <= exp; counter += 1) {
    total = multiply(total, number);
  }

  return total;
}

console.log(powerToTheExp(3, 3));
