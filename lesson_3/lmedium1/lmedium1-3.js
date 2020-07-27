// lmedium1-3.js

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(4));

/* The condition (number % divisor === 0) checks if
a number is evenly divided by itself and smaller numbers
to determine which numbers are factors of the number

"It determines whether the result of the division is an
integer -- if the number has no remainder, the result is
an integer, so the number divided by the divisor is a factor."

* If you used factors.push(divisor) instead of 
factors.push(number / divisor), you would get the factors
in the array in greatest to least order instead of least
to greatest order */
