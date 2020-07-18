// leasy2-7.js

let flintstones =
{ Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let obj2 =
Object.entries(flintstones).filter(element => element[0] === 'Barney').shift();

console.log(obj2);
