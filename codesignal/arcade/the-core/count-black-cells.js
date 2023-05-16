function solution(n, m) {
  const gcd = (a, b) => !b ? a : gcd(b, a % b);
  return n + m + gcd(n, m) - 2;
}

solution(3, 4);

// (╯°□°)╯︵ ┻━┻
