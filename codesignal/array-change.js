function solution(inputArray) {
  let maxVal = inputArray[0];
  let moves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= maxVal) {
      moves += maxVal - inputArray[i] + 1;
      inputArray[i] = maxVal + 1;
    }
    maxVal = inputArray[i];
  }
  return moves;
}

solution([1, 1, 1]);

// (╯°□°)╯︵ ┻━┻
