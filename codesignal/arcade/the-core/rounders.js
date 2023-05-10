function solution(n) {
  const revNumber = n.toString().split('').reverse().map(Number);
  for (let i = 0; i < revNumber.length - 1; i++) {
    if (revNumber[i] >= 5) revNumber[i + 1]++;
    revNumber[i] = 0;
  }
  return Number(revNumber.reverse().join(''));
}

solution(15);
