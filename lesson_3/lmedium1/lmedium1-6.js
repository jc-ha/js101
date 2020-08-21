// lmedium1-6.js

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false, also c9 triggering error

/* NaN (not a number) is a special numeric value that indicates that
an operation that was intended to return a number failed; JS does not
allow == and === to determine whether a value is NaN

Bonus: Instead, you must use Number.isNaN() on the value, like below */

console.log(Number.isNaN(nanArray[0])); // true
