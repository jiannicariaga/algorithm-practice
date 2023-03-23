function solution(inputArray) {
  return inputArray.reduce((maxDiff, currentDiff, index, inputArray) => {
    currentDiff = Math.abs(inputArray[index] - inputArray[index + 1]);
    return currentDiff > maxDiff ? currentDiff : maxDiff;
  }, 0);
}

solution([2, 4, 1, 0]);
