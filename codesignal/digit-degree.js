function solution(n) {
  return n < 10
    ? 0
    : solution(Number(String(n).split('').map(Number).reduce((a, b) => a + b))) + 1;
}

solution(5);
