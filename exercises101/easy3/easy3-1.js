// easy3-1.js

/*function crunch(string) {
  let condensedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index - 1]) {
      condensedString += string[index];
    }
  }

  return condensedString;
}*/

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/** The last index character needs to be iterated over because the
 * previous character may have been passed over if the last two
 * characters matched. For example, with ddoouubbllee, the first e
 * was ignored because there was a second e, but if the loop stopped
 * when it got to index === text.length - 1, then it wouldn't iterate
 * over the last character and that e character would not be included.
 * Since text[index + 1] is undefined and e !== undefined, the last e
 * will be added to crunchText and you get 'daily double'. */
