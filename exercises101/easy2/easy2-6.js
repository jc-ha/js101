// easy2-6.js

function penultimate(string) {
  let arrWords = string.split(' ');
  return arrWords[arrWords.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate('Let us go to the market tomorrow night.'));

function middleWord(string) {
  let arrWords = string.split(' ');

  if (arrWords.length < 2) {
    return arrWords[0];
  } else {
    return arrWords[Math.floor(arrWords.length / 2)];
  }
}

console.log(middleWord('Batman'));
console.log(middleWord('Let us go to the market tomorrow at Chelsea.'));