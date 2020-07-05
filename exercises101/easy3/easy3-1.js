// easy3-1.js

function crunch(string) {
  let condensedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index - 1]) {
      condensedString += string[index];
    }
  }

  return condensedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
