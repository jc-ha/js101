// leasy3-4.js

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/* The reassignment of the object value from "value1" to 42 on
arr2 will affect the original object since the reference to this
object was copied to arr2 as well, arr1[0] and arr2[0] point to
the same object */
