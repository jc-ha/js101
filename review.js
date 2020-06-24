// review.js

let number = 5;

function test(number) {
  number = 3;
}

test(number);
console.log(number); // 5

/** The reason that this code doesn't change the value of number
 * defined on line 1 is that the number parameter on line 3 shadows
 * the number variable by creating a separate and independent
 * variable with the same name, but with the scope limited to the
 * function. Check exercise 8, Objects chapter in js100 book. */

// question below

let list = [1, 2, 3, 4, 5, 6, 7];

list.forEach(element => {
  console.log(list.shift());
}); // why does this stop after 4 elements?

console.log(list); // this shows 5, 6, 7 left in array
// Coding Tips 2 > Don't mutate the caller during iteration
