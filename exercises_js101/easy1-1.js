// easy1-1.js

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
