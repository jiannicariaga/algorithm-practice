function solution(a, b, n) {
  let money = 0;
  for (let i = 0; i < n; i++) money += a++ * b++;
  return money;
}

solution(1, 2, 2);
