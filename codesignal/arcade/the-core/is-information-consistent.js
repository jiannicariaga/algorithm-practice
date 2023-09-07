function solution(evidences) {
  const responses = evidences[0].map((_, j) => evidences.map((_, i) => evidences[i][j]));
  return responses.every(col => Math.max(...col) <= 0 || Math.min(...col) >= 0);
}

solution([
  [0, 1, 0, 1],
  [-1, 1, 0, 0],
  [-1, 0, 0, 1]
]);

// (╯°□°)╯︵ ┻━┻
