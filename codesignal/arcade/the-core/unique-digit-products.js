function solution(a) {
  return a.map(n => n
    .toString()
    .split('')
    .map(Number)
    .reduce((product, n) => product * n))
    .filter((n, i, arr) => i === arr.indexOf(n)).length;
}

solution([2, 8, 121, 42, 222, 23]);
