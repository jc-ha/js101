// lmedium1-4.js

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/* Method push() adds a new element to the array, thus mutating it,
while concat() returns a new array and does not affect the existing
array, also the function with concat() reassigns a new array to the
parameter buffer, which does not affect the original variable; both
functions should return the same value but the first one mutates the
calling array while the second does not */
