function solution(product) {
  const smallestPositive = n => String(n).split('').map(Number).reduce((a, b) => a * b, 1);
  for (let i = 1; i < 3600; i++) if (smallestPositive(i) === product) return i;
  return -1;
}

solution(12);

// (╯°□°)╯︵ ┻━┻
