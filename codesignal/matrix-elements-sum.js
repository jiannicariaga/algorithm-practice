function solution(matrix) {
  let sum = 0;
  for (const i in matrix) {
    for (const j in matrix[i]) {
      if (i === 0 && matrix[i][j] !== 0) sum += matrix[i][j];
      else if (i > 0 && matrix[i - 1][j] === 0) matrix[i][j] = 0;
      else sum += matrix[i][j];
    }
  }
  return sum;
}

solution([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);
