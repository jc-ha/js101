// easy1-6.js
const READLINE = require('readline-sync');

/*
function getSum(num) {
  let total = 0;
  
  for (let i = 1; i <= Number(num); i += 1) {
    total += i;
  }
  
  return total;
}

function getSum(arr) {
  return arr.reduce((acc, currValue) => {
    acc + currValue;
  }, 0);
}

function getProduct(num) {
  let total = 1;
  
  for (let i = 1; i <= Number(num); i += 1) {
    total *= i;
  }
  
  return total;
}

let input = Number(READLINE.question('Please provide an integer great than 0: '));

while (!Number.isInteger(input) || input <= 0) {
  input = Number(READLINE.question('Must provide an integer great than 0: '));
}

let operation = READLINE.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
  ).toLowerCase();

while (!['s', 'p'].includes(operation)) {
  operation = READLINE.question('Must enter "s" for sum, or "p" for product: '
  ).toLowerCase();
}

if (operation === 's') {
  let sum = getSum(input);
  console.log(`The sum of the integers between 1 and ${input} is ${sum}.`);
} else if (operation === 'p') {
  let product = getProduct(input);
  console.log(`The product of the integers between 1 and ${input} is ${product}.`);
}
*/

function getSum(arr) {
  return arr.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);
}

function getProduct(arr) {
  return arr.reduce((acc, currValue) => {
    return acc * currValue;
  }, 1);
}

let input = [1, 2, 3, 4, 5, 6];
//let input = Number(READLINE.question('Please provide an array of numbers: '));

let operation = READLINE.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
  ).toLowerCase();

while (!['s', 'p'].includes(operation)) {
  operation = READLINE.question('Must enter "s" for sum, or "p" for product: '
  ).toLowerCase();
}

if (operation === 's') {
  let sum = getSum(input);
  console.log(`The sum of the array elements ${input} is ${sum}.`);
} else if (operation === 'p') {
  let product = getProduct(input);
  console.log(`The product of the array elements ${input} is ${product}.`);
}