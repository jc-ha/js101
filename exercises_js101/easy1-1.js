// easy1-1.js

/* Problem
input: one positive/negative/zero integer
output: boolean, true if absolute value is odd

assume valid integer
what is absolute value? a magnitude, either positive or zero

determine if the positive value of the argument is an odd 
number, and if yes, return true, and if no, return false

Examples
I: 2, O: false
I: 3, O: true
I: 0, O: false

Data Structure
a number is provided

Algorithm
1. determine if integer is positive or negative; if negative, turn 
it into a positive
2. take integer and check if remainder of number/2 does not equal 0
  1. if does not equal 0, return true
  2. if does equal 0, return false */

function isOdd(num) {
  if (num < 0) {
    num = 0 - num;
  }
  return num % 2 !== 0;
}

// Solution is more concise

function isOdd1(num) {
  return Math.abs(num) % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
