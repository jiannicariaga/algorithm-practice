/* eslint-disable no-console */

const input = 'Hey, you. You\'re finally awake.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (const i in input) {
  for (const j in vowels) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      if (vowels[j] === 'e') resultArray.push('e');
      else if (vowels[j] === 'u') resultArray.push('u');
    }
  }
}

console.log(resultArray.join('').toUpperCase());
