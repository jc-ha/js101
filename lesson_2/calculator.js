// Ask user for first number
// Ask user for second number
// Ask user for operation to perform
// Perform operation on numbers
// Log results to terminal

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

/*console.log('What\'s the first number?');
let number1 = readline.question();

console.log('What\'s the second number?');
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}*/

/* Refactored code by coercing input values to numbers at variable 
assignment and by using switch statement */

console.log('What\'s the first number?');
let number1 = Number(readline.question());

console.log('What\'s the second number?');
let number2 = Number(readline.question());

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = Number(readline.question());

let output;
switch (operation) {
  case 1:
    output = number1 + number2;
    break;
  case 2:
    output = number1 - number2;
    break;
  case 3:
    output = number1 * number2;
    break;
  case 4:
    output = number1 / number2;
    break;
}

console.log(`The result is: ${output}`);
