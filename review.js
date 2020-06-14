/** Test Code */

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
