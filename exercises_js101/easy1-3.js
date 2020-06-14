// easy1-3.js

let rlSync = require('readline-sync');
console.log('Please provide limits to even numbers to log.');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let num1 = rlSync.question('First number please: ');
while (invalidNumber(num1)) {
  num1 = rlSync.question('Not a number - please try again: ');
}
let num2 = rlSync.question('Second number please: ');
while (invalidNumber(num2)) {
  num2 = rlSync.question('Not a number - please try again: ');
}

function evenNumbers(num1, num2) {
  for (let counter = Number(num1); counter <= Number(num2); counter += 1) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
}

evenNumbers(num1, num2);
