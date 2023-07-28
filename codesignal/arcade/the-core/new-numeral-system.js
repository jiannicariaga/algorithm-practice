function solution(number) {
  const n = number.charCodeAt(0) - 'A'.charCodeAt(0);
  const pairs = [];
  for (let i = 0; i <= Math.floor(n / 2); i++) {
    pairs.push(`${String.fromCharCode(i + 'A'.charCodeAt(0))} + ${String.fromCharCode(n - i + 'A'.charCodeAt(0))}`);
  }
  return pairs;
}

solution('G');
