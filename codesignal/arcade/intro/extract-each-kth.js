function solution(inputArray, k) {
  return inputArray.filter((_, i) => (i + 1) % k);
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
