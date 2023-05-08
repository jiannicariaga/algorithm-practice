function solution(k) {
  let yellow = 0;
  let red = 0;
  for (let m = 1; m <= k; m++) m % 2 === 1 ? yellow += m ** 2 : red += m ** 2;
  return red - yellow;
}

solution(5);
