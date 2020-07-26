// leasy3-5.js

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid1(color) {
  return color === 'blue' || color === 'green';
}

let isColorValid2 = color => color === 'blue' || color === 'green';

let isColorValid3 = color => ['blue', 'green'].includes(color);
