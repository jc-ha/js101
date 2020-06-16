let rlSync = require('readline-sync');
console.log('Welcome to Mortgage Calculator');

console.log('Please enter your loan amount in dollars.');
let p = parseFloat(rlSync.question().substring(1)); // loan amount

console.log('Please enter interest rate as a percentage.');
let j = (parseFloat(rlSync.question()) / 100 ) / 12; // monthly interest rate

console.log('Please enter the loan duration in years.');
let n = parseFloat(rlSync.question()) * 12; // duration in months
let m; // monthly payment

function mortgageCalc() {
  if (j === 0) {
    m = p / n;
  } else {
    m = p * (j / (1 - Math.pow((1 + j), (-n))));
  }
}
mortgageCalc();
console.log(`Your monthly mortgage payment is $${m.toFixed(2)}.`);
