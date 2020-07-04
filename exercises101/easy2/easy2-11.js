// easy2-11.js

/*function integerToString(integer) {
  return `${integer}`;
}*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let digits = [];
  
  let number = integer;
  while (number > 0) {
    digits.push(number % 10);
    number -= (number % 10);
  }
  
  console.log(digits);
}

integerToString(4321);

/*
let number = 4936;
let ones = number % 10;
number = (number - ones) / 10;
let tens = number % 10;
number = (number - tens) / 10;
let hundreds = number % 10;
let thousands = (number - hundreds) / 10; */