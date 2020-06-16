let rlSync = require('readline-sync');
let jsonMsg = require('./calculator_messages.json');
let num1;
let num2;
let operation;
let output;
let calcAgain;
let language;

function prompt(keyMessage) {
  let message = jsonMsg[language][keyMessage];
  console.log(`=> ${message}`);
}

function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function chooseLang() {
  console.log('English or Espanol?\nen - English  es - Espanol');
  language = rlSync.question();
  while (!['en', 'es'].includes(language)) {
    console.log('en - English, es - Espanol.');
    language = rlSync.question();
  }
}

function firstNum() {
  prompt('firstQuestion');
  num1 = rlSync.question();
  while (invalidNum(num1)) {
    prompt('validNumber');
    num1 = rlSync.question();
  }
}

function secondNum() {
  prompt('secondQuestion');
  num2 = rlSync.question();
  while (invalidNum(num2)) {
    prompt('validNumber');
    num2 = rlSync.question();
  }
}

function getOperation() {
  prompt('chooseOperation');
  operation = rlSync.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('validOperation');
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
  prompt('askRepeat');
  calcAgain = rlSync.question().toLowerCase();
  while (!['y', 'n'].includes(calcAgain)) {
    prompt('validRepeat');
    calcAgain = rlSync.question().toLowerCase();
  }
}

chooseLang();
prompt('welcome');
do {
  firstNum();
  secondNum();
  getOperation();
  calculate();
  repeatCalc();
} while (calcAgain === 'y');

/*
while (true) {
  // code omitted for brevity

  if (answer[0].toLowerCase() !== 'y') break;
}*/