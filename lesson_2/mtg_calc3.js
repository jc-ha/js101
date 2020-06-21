// Define variables and functions
const READLINE = require('readline-sync');
const MESSAGES = require('./mtg_msgs.json');
let principal;
let monthlyIntRate;
let durationMonths;
let mtgPayment;
let calcAgain;

function invalidNum(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         Number(num) < 0;
}

function invalidDuration(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         Number(num) < 0 ||
         !Number.isInteger(Number(num));
}

function invalidCalcAgain(str) {
  return !['y', 'n'].includes(str.toLowerCase());
}

function getInput(inputType, invalidInput) {
  console.log(MESSAGES[inputType]);
  let input = READLINE.prompt();

  while (invalidInput(input)) {
    console.log(MESSAGES[`invalid${inputType}`]);
    input = READLINE.prompt();
  }
  return input;
}

function getMtgPayment() {
  let mortgage;
  if (durationMonths === 0) {
    mortgage = principal;
  } else if (monthlyIntRate === 0) {
    mortgage = principal / durationMonths;
  } else {
    mortgage = principal * (monthlyIntRate /
    (1 - Math.pow((1 + monthlyIntRate), (-durationMonths))));
  }
  return mortgage;
}

// Start prog
do {
  console.clear();
  console.log(MESSAGES['welcome']);
  principal = Number(getInput('amountQuestion', invalidNum));
  monthlyIntRate = (Number(getInput('intQuestion', invalidNum)) / 100) / 12;
  durationMonths = Number(getInput('durationQuestion', invalidDuration)) * 12;
  mtgPayment = getMtgPayment();
  console.log(`Your monthly mortgage payment is $${mtgPayment.toFixed(2)}.`);
  calcAgain = getInput('againQuestion', invalidCalcAgain).toLowerCase();
} while (calcAgain === 'y');
