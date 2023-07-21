function solution(a) {
  const totalSum = a.reduce((sum, val) => sum + val);
  let firstSum = 0;
  let secondSum = 0;
  let count = 0;
  for (let i = 0; i < a.length - 2; i++) {
    firstSum += a[i];
    secondSum = 0;
    for (let j = i + 1; j < a.length - 1; j++) {
      secondSum += a[j];
      if (firstSum === secondSum && secondSum === totalSum - firstSum - secondSum) count++;
    }
  }
  return count;
}

solution([0, -1, 0, -1, 0, -1]);

// (╯°□°)╯︵ ┻━┻
