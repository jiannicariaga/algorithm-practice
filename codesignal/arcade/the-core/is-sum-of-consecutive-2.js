function solution(n) {
  let count = 0;
  for (let i = 1; i < n / 2; i++) {
    let sum = i;
    for (let j = i + 1; sum <= n; j++) {
      if (sum === n) {
        count++;
        break;
      }
      sum += j;
    }
  }
  return count;
}

solution(9);

// (╯°□°)╯︵ ┻━┻
