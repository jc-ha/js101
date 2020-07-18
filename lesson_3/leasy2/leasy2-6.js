// leasy2-6.js

/*
let flintstones = ["Fred", "Wilma"];

//flintstones.push('Barney', 'Betty', 'Bambam', 'Pebbles');

let moreNames = ['Barney', 'Betty', 'Bambam', 'Pebbles'];
//flintstones.push(...moreNames); // Returns new length of original array

let newFlint2 = flintstones.concat(moreNames);
console.log(newFlint2);
*/

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log([].concat(...flintstones));

let flintstones1 = flintstones.reduce((acc, element) => {
  return acc.concat(element);
}, []);
console.log(flintstones1);

let flintstones2 = [];
flintstones.forEach((element) => {
  flintstones2 = flintstones2.concat(element);
});

console.log(flintstones2);
