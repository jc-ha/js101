// leasy3-3.js

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/* str1 remains 'hello there' since reassigning str2 does not
affect strl; primitives are immutable and passed by value; on
line 4, a copy of str1 value is made and assigned to str2, so
making changes to str2 does not affect str1 */
