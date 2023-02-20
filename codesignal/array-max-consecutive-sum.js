function solution(inputArray, k) {
  let cumulativeSum = inputArray.slice(0, k).reduce((a, b) => a + b);
  let maxSum = cumulativeSum;
  for (let i = 0; i < inputArray.length - k; i++) {
    cumulativeSum += inputArray[i + k] - inputArray[i];
    maxSum = Math.max(maxSum, cumulativeSum);
  }
  return maxSum;
}

solution([2, 3, 5, 1, 6], 2);
