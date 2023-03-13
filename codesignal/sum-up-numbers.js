function solution(inputString) {
  const numbers = inputString.match(/\d+/g);
  return numbers === null ? 0 : numbers.reduce((sum, n) => sum + Number(n), 0);
}

solution('2 apples, 12 oranges');
