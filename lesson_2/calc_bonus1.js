/* Assignment: Calculator Bonus 1
Problem
ask user if they'd like to run another calculation
input: y/n
output: another run of code
just need to be able to repeat the code again if they answer y
Example
y
Data Structure
Just a string y or n
Algorithm
use a loop with a that checks if answer is y and keeps running 
affirmative 
make functions out of much of the code to keep while simple */

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function firstNum() {
  prompt('What\'s the first number?');
  num1 = rlSync.question();
  while (invalidNum(num1)) {
    prompt('That doesn\'t look like a valid number.');
    num1 = rlSync.question();
  }
}

function secondNum() {
  prompt('What\'s the second number?');
  num2 = rlSync.question();
  while (invalidNum(num2)) {
    prompt('That doesn\'t look like a valid number.');
    num2 = rlSync.question();
  }
}

function getOperation() {
  prompt('What operation would like to perform?\n1) + 2) - 3) * 4) /');
  operation = rlSync.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = rlSync.question();
  }
}

function calculate() {
  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }
  prompt(`The result is ${output}.`);
}

function repeatCalc() {
  prompt('Do you want to perform another calculation? (y/n)');
  calcAgain = rlSync.question();
}

prompt('Welcome to Calculator!');
let num1;
let num2;
let operation;
let output;
let calcAgain;

do {
  firstNum();
  secondNum();
  getOperation();
  calculate();
  repeatCalc();
} while (calcAgain[0].toLowerCase() === 'y');