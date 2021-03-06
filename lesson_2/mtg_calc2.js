// Define variables and functions
let rlSync = require('readline-sync');
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

function updatePrincipal() {
  console.log('Please enter your loan amount, e.g., 200000 for $200,000.');
  let loanAmount = rlSync.question();
  while (invalidNum(loanAmount)) {
    console.log('Please enter a valid number.');
    loanAmount = rlSync.question();
  }
  principal = parseFloat(loanAmount);
}

function updateMonthlyIntRate() {
  console.log('Please enter your interest rate, e.g., 3.8 for 3.8%.');
  let interestRate = rlSync.question();
  while (invalidNum(interestRate)) {
    console.log('Please enter a valid number.');
    interestRate = rlSync.question();
  }
  monthlyIntRate = (parseFloat(interestRate) / 100) / 12;
}

function updateDurationMonths() {
  console.log('Please enter your loan duration, e.g., 30 for 30 years.');
  let durationYears = rlSync.question();
  while (invalidNum(durationYears)) {
    console.log('Please enter a valid number.');
    durationYears = rlSync.question();
  }
  durationMonths = parseFloat(durationYears) * 12;
}

function updateMtgPayment() {
  if (durationMonths === 0) {
    mtgPayment = principal;
  } else if (monthlyIntRate === 0) {
    mtgPayment = principal / durationMonths;
  } else {
    mtgPayment = principal * (monthlyIntRate /
    (1 - Math.pow((1 + monthlyIntRate), (-durationMonths))));
  }
}

function updateCalcAgain() {
  console.log('Would you like to perform another calculation? (y/n)');
  calcAgain = rlSync.question().toLowerCase();
  while (!['y', 'n'].includes(calcAgain)) {
    console.log('Please enter y for yes or n for no.');
    calcAgain = rlSync.question().toLowerCase();
  }
}

// Start prog
do {
  console.clear();
  console.log('Welcome to Mortgage Calculator\n * * * * *');
  updatePrincipal();
  updateMonthlyIntRate();
  updateDurationMonths();
  updateMtgPayment();
  console.log(`Your monthly mortgage payment is $${mtgPayment.toFixed(2)}.`);
  updateCalcAgain();
} while (calcAgain === 'y');
