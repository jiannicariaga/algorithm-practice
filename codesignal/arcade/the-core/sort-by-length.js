function solution(inputArray) {
  return inputArray
    .map((len, i) => [len, i])
    .sort((a, b) => a[0].length !== b[0].length ? a[0].length - b[0].length : a[1] - b[1])
    .map(len => len[0]);
}

solution(['abc', '', 'aaa', 'a', 'zz']);
