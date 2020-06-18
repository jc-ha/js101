// easy1-2.js

let rlSync = require('readline-sync');
console.log('Please enter limits for odd numbers logged.');

let num1 = Number(rlSync.question('First number please: '));
while (Number.isNaN(num1)) {
  num1 = Number(rlSync.question('Not a number - please try again: '));
}
let num2 = Number(rlSync.question('Second number please: '));
while (Number.isNaN(num2)) {
  num2 = Number(rlSync.question('Not a number - please try again: '));
}

function oddNumbers(num1, num2) {
  for (let counter = num1; counter <= num2; counter += 1) {
    if (counter % 2 !== 0 ) {
      console.log(counter);
    }
  }
}

oddNumbers(num1, num2);
