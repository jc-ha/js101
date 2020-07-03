// easy1-10.js

function multisum(num) {
  let sum = 0;

  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter;
    }
  }

  return sum;
}
/*
function isMultiple(num, divisor) {
  return num % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
*/
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
