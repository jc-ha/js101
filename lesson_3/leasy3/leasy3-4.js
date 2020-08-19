// leasy3-4.js

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // Created shallow copy, so object references copied
arr2[0].first = 42; // Original object is mutated since arr2 holds reference
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5];

/* The reassignment of the object value from 'value1' to 42 on
arr2 will affect the original object since the reference to this
object was copied to arr2 as well, arr1[0] and arr2[0] point to
the same object */
