function solution(a) {
  const values = a.map(x => a.reduce((sum, val) => sum + Math.abs(val - x), 0));
  return a[values.indexOf(Math.min(...values))];
}

solution([2, 4, 7]);
