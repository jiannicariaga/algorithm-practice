function solution(a0) {
  const sequence = [a0];
  let sum = String(a0)
    .split('')
    .map(Number)
    .map(n => n ** 2)
    .reduce((a, b) => a + b);
  while (!sequence.includes(sum)) {
    sequence.push(sum);
    sum = String(sum)
      .split('')
      .map(Number)
      .map(n => n ** 2)
      .reduce((a, b) => a + b);
  }
  return sequence.length + 1;
}

solution(16);
