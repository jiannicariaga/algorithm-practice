function solution(a) {
  return a.length + new Set(a.map(n => Math.ceil(n / 10000))).size;
}

solution([20000, 239, 10001, 999999, 10000, 20566, 29999]);
