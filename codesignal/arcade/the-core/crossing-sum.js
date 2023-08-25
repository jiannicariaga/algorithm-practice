function solution(matrix, a, b) {
  return (
    matrix[a].reduce((sum, val) => sum + val) +
    matrix.reduce((sum, row) => sum + row[b], 0) -
    matrix[a][b]
  );
}

solution([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3);
