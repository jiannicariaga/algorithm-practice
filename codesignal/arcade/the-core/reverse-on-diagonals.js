function solution(matrix) {
  const firstDiagonal = matrix.map((_, i) => matrix[i][i]);
  const secondDiagonal = matrix.map((_, i) => matrix[i][matrix.length - i - 1]);
  for (const j in matrix) {
    matrix[j][j] = firstDiagonal.pop();
    matrix[j][matrix.length - j - 1] = secondDiagonal.pop();
  }
  return matrix;
}

solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
