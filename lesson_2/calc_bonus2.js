let rlSync = require('readline-sync');
let jsonMsg = require('./calculator_messages.json');
let num1;
let num2;
let operation;
let output;
let calcAgain;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function firstNum() {
  prompt(jsonMsg.firstQuestion);
  num1 = rlSync.question();
  while (invalidNum(num1)) {
    prompt(jsonMsg.validNumber);
    num1 = rlSync.question();
  }
}

function secondNum() {
  prompt(jsonMsg.secondQuestion);
  num2 = rlSync.question();
  while (invalidNum(num2)) {
    prompt(jsonMsg.validNumber);
    num2 = rlSync.question();
  }
}

function getOperation() {
  prompt(jsonMsg.chooseOperation);
  operation = rlSync.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(jsonMsg.validOperation);
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
  prompt(jsonMsg.askRepeat);
  calcAgain = rlSync.question();
}

prompt(jsonMsg.welcome);
do {
  firstNum();
  secondNum();
  getOperation();
  calculate();
  repeatCalc();
} while (calcAgain[0].toLowerCase() === 'y');
