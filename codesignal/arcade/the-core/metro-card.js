function solution(lastNumberOfDays) {
  return [28, 30].includes(lastNumberOfDays) ? [31] : [28, 30, 31];
}

solution(30);
