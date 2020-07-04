// easy2-7.js
/*
function xor(val1, val2) {
  if ((Boolean(val1) === true && Boolean(val2) === false) ||
      (Boolean(val1) === false && Boolean(val2) === true)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);*/

function xor1(val1, val2) {
  if ((val1 && !val2) || (val2 && !val1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor1(5, 0) === true);
console.log(xor1(false, true) === true);
console.log(xor1(1, 1) === false);
console.log(xor1(true, true) === false);

/** The second operand needs to be evaluated because you can only
 * have one truthy value in this function */
 