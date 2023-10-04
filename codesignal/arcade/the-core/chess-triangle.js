function solution(n, m) {
  const ways = (n, m, x, y) => n < x || m < y ? 0 : (n - x + 1) * (m - y + 1);
  const times = (n, m, x, y) => (ways(n, m, x, y) + ways(m, n, x, y)) * 8;
  return times(n, m, 2, 3) + times(n, m, 3, 3) + times(n, m, 2, 4) + times(n, m, 3, 4);
}

solution(2, 3);
