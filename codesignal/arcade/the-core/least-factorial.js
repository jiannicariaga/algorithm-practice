function solution(n) {
  let k = 1;
  let i = 1;
  while (k < n) k *= ++i;
  return k;
}

solution(17);
