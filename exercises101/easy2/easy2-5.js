// easy2-5.js

const READLINE = require('readline-sync');

let num1 = Number(READLINE.question('Enter the first number: '));
let num2 = Number(READLINE.question('Enter the second number: '));

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
// Instead of **, can use Math.pow
