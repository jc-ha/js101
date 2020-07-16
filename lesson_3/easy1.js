// easy1.js

// 4.
let munstersDescription = "the Munsters are CREEPY and Spooky.";

console.log(`${munstersDescription.slice(0, 1).toUpperCase() +
  munstersDescription.slice(1).toLowerCase()}`);

console.log(`${munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase()}`);

// 6.
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
console.log(ages);

// 7.
let str1 =
"Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(/Dino/.test(str1));
console.log(/Dino/.test(str2));

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

let regex = /Dino/g;
console.log(str1.match(regex) !== null);
console.log(str2.match(regex) !== null);

console.log(str1.indexOf('Dino') > -1);
console.log(str2.indexOf('Dino') > -1);

// 8, 9.
let flintstones =
["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

console.log(flintstones.concat('Dino')); // Does not mutate original array

flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

// 10.
let advice =
"Few things in life are as important as house training your pet dinosaur.";

console.log(advice.substring(0, advice.indexOf('house')));
