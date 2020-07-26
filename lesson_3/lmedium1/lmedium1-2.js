// lmedium1-2.js

let munstersDescription = "The Munsters are creepy and spooky.";

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

console.log(munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(''));
