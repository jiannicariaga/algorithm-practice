function solution(deposit, rate, threshold) {
  let years = 0;
  while (deposit < threshold) {
    deposit += deposit * rate / 100;
    years++;
  }
  return years;
}

solution(100, 20, 170);
