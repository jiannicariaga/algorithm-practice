function solution(divisors, k) {
  const clans = [];
  for (let i = 1; i <= k; i++) {
    let c = 0;
    for (let j = 0; j < divisors.length; j++) {
      if (i % divisors[j] === 0) c = c | (1 << j);
    }
    clans[c] = 1;
  }
  return clans.reduce((a, b) => a + b);
}

solution([2, 3], 6);
