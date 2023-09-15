function solution(shuffled) {
  const sum = shuffled.reduce((a, b) => a + b) / 2;
  shuffled.splice(shuffled.indexOf(sum), 1);
  return shuffled.sort((a, b) => a - b);
}

solution([1, 12, 3, 6, 2]);
