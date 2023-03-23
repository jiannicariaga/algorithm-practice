function solution(inputArray) {
  let longestLength = 0;
  const longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) longestLength = inputArray[i].length;
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longestLength) longestStrings.push(inputArray[j]);
  }
  return longestStrings;
}

solution(['aba', 'aa', 'ad', 'vcd', 'aba']);
