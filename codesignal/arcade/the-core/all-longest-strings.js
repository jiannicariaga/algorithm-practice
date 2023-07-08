function solution(inputArray) {
  const longestLength = Math.max(...inputArray.map(input => input.length));
  return inputArray.filter(input => input.length === longestLength);
}

solution(['aba', 'aa', 'ad', 'vcd', 'aba']);
