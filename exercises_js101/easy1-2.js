/* Problem
input:
output: log all odd numbers between 1-99, including ends
log on separate lines
start counting from 1 to 99 and log any odd number

Examples
O: 1, 3, 5, 7, 9

Data Structure
Just counting up in increments

Algorithm
1. Set i = 1 and check that it is less than 100
2. If yes, go on, if no, stop
  1. Check if i is an odd number
  2. If yes, go on, if no, increment i and go back to loop
    1. Log i, increment i, go back to loop

Further Exploration
Ask for input on limits of numbers
Save those inputs and use them as arg for function
Negative integers? */

let rlSync = require('readline-sync');
console.log('Please enter limits for odd numbers logged.');

let num1 = Number(rlSync.question('First number: '));
while (Number.isNaN(num1)) {
  num1 = Number(rlSync.question('Not a number. Try again: '));
}
let num2 = Number(rlSync.question('Second number: '));
while (Number.isNaN(num2)) {
  num2 = Number(rlSync.question('Not a number. Try again: '));
}

function oddNumbers(num1, num2) {
  for (let counter = num1; counter <= num2; counter += 1) {
    if (counter % 2 !== 0 ) {
      console.log(counter);
    }
  }
}

oddNumbers(num1, num2);
