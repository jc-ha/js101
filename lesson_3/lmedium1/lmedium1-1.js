// lmedium1-1.js

let string = 'The Flintstones Rock!';

for (let count = 0; count < 10; count += 1) {
  console.log(string.padStart(string.length + count));
}

for (let padding = 0; padding < 10; padding += 1) {
  console.log(`${' '.repeat(padding)}${string}`);
}

for (let padding = 0; padding < 10; padding += 1) {
  console.log(' '.repeat(padding) + string);
}
