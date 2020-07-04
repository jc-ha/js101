// easy2-2.js

const READLINE = require('readline-sync');

let name = READLINE.question('What is your name? ');

if (name.includes('!')) {
  console.log(`HELLO ${name.split('!')[0].toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
