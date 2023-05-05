function solution(param1, param2) {
  const x = String(param1 > param2 ? param1 : param2).split('').map(Number);
  const y = String(param1 > param2 ? param2 : param1).split('').map(Number);
  while (y.length !== x.length) y.unshift(0);
  const sum = Number(x.map((el, i) => (el + y[i]) % 10).join(''));
  return sum;
}

solution(456, 1734);
