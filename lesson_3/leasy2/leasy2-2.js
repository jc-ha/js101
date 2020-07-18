// leasy2-2.js

let numbers = [1, 2, 3, 4, 5];

console.log(Array.from(numbers).reverse());
console.log(numbers.slice().reverse());
console.log(numbers);

console.log([...numbers].sort((a, b) => b - a));
console.log(numbers);

// Bonus 1
let reversedArr = [];
numbers.forEach((num) => {
  reversedArr[(numbers.length - 1) - numbers.indexOf(num)] = num;
});
console.log(reversedArr);

let reversedArr1 = [];
numbers.forEach((num) => {
  reversedArr1.unshift(num);
});
console.log(reversedArr1);

let reversedArr2 = [];
numbers.forEach((_, index) => {
  reversedArr2.push(numbers[(numbers.length - 1) - index]);
});
console.log(reversedArr2);

//Bonus 2
let reversedArr3 = numbers.reduce((acc, num) => [num, ...acc], []);
console.log(reversedArr3);
