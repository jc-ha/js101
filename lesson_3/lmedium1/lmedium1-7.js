// lmedium1-7.js

let answer = 42; // 42

function messWithIt(someNumber) {
  return (someNumber += 8); // 50
}

let newAnswer = messWithIt(answer); // 50

console.log(answer - 8); // 34
