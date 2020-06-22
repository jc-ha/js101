// Define variables and functions
const READLINE = require('readline-sync');
const MESSAGES = require('./mtg_msgs.json');

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

function getMtgPayment(duration, loan, interest) {
  let mortgage;
  if (duration === 0) {
    mortgage = loan;
  } else if (interest === 0) {
    mortgage = loan / duration;
  } else {
    mortgage = loan * (interest /
    (1 - Math.pow((1 + interest), (-duration))));
  }
  return mortgage;
}

// Start prog
let calcAgain;
do {
  console.clear();
  console.log(MESSAGES['welcome']);
  let principal = Number(getInput('amountQuestion', invalidNum));
  let monthlyIntRate = (Number(getInput('intQuestion', invalidNum)) / 100) / 12;
  let durationMonths = Number(getInput('durationQuestion', invalidDuration)) * 12;
  let mtgPayment = getMtgPayment(durationMonths, principal, monthlyIntRate);
  console.log(`Your monthly mortgage payment is $${mtgPayment.toFixed(2)}.`);
  calcAgain = getInput('againQuestion', invalidCalcAgain).toLowerCase();
} while (calcAgain === 'y');
