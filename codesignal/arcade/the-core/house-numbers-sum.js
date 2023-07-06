function solution(inputArray) {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((a, b) => a + b, 0);
}

solution([5, 1, 2, 3, 0, 1, 5, 0, 2]);
