// easy1-5.js

console.clear();
let rlSync = require('readline-sync');
const PERC_TO_DEC = 0.01;

function invalidNum(num) {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         Number(num) < 0;
}

let billAmount = rlSync.question('What is the bill? ');
while (invalidNum(billAmount)) {
  billAmount = rlSync.question('Please enter a valid bill amount: ');
}
billAmount = Number(billAmount);

let tipPerc = rlSync.question('What is the tip percentage? ');
while (invalidNum(tipPerc)) {
  tipPerc = rlSync.question('Please enter a valid tip percent: ');
}
tipPerc = Number(tipPerc) * PERC_TO_DEC;

let tipAmount = billAmount * tipPerc;
let billTotal = billAmount + tipAmount;
console.log(`The tip is $${tipAmount.toFixed(2)}.`);
console.log(`The total is $${billTotal.toFixed(2)}.`);
