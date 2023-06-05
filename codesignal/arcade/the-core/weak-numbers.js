function solution(n) {
  const divisors = {};
  for (let i = 1; i <= n; i++) {
    divisors[i] = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisors[i]++;
    }
  }
  let weaknessCount = 0;
  const arr = [];
  while (n > 0) {
    for (let k = n - 1; k > 0; k--) {
      if (divisors[n] < divisors[k]) weaknessCount++;
    }
    arr.push(weaknessCount);
    weaknessCount = 0;
    n--;
  }
  const weakness = Math.max(...arr);
  for (const l in arr) {
    if (weakness === arr[l]) weaknessCount++;
  }
  return [weakness, weaknessCount];
}

solution(9);

// (╯°□°)╯︵ ┻━┻
