// easy2-8.js

function oddities(array) {
  let oddElements = [];

  for (let index = 0; index < array.length; index += 2) {
    oddElements.push(array[index]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evens2(array) {
  let evenElements = [];

  array.forEach(element => {
    if (array.indexOf(element) % 2 !== 0) {
      evenElements.push(element);
    }
  });

  return evenElements;
}

function evens1(array) {
  return array.filter(elements => {
    return array.indexOf(elements) % 2 !== 0;
  });
}

function evens(array) {
  let evenElements = [];

  array.forEach((elements, index) => {
    if (index % 2 !== 0) {
      evenElements.push(elements);
    }
  });

  return evenElements;
}

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []
