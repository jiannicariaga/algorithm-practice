function solution(a, b, c) {
  return [a + b, a - b, a * b, a / b].includes(c);
}

solution(2, 3, 5);
