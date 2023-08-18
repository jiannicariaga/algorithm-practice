function solution(matrix, column) {
  return matrix.map(arr => arr[column]);
}

solution([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2);
