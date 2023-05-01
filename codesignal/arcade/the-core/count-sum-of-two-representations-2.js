function solution(n, l, r) {
  let count = 0;
  for (l; l <= r; l++) if (l <= n - l && n - l <= r) count++;
  return count;
}

solution(6, 2, 4);
