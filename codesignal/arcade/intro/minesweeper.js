function solution(matrix) {
  const matrixHeight = matrix.length;
  const matrixWidth = matrix[0].length;
  const finalMatrix = Array.from(Array(matrixHeight), () => new Array(matrixWidth));
  const direction = {
    topLeft: (i, j) => matrix[i - 1][j - 1],
    top: (i, j) => matrix[i - 1][j],
    topRight: (i, j) => matrix[i - 1][j + 1],
    bottomLeft: (i, j) => matrix[i + 1][j - 1],
    bottom: (i, j) => matrix[i + 1][j],
    bottomRight: (i, j) => matrix[i + 1][j + 1],
    left: (i, j) => matrix[i][j - 1],
    right: (i, j) => matrix[i][j + 1]
  };
  let mines = 0;
  for (let i = 0; i < matrixHeight; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (i) {
        if (direction.topLeft(i, j)) mines++;
        if (direction.top(i, j)) mines++;
        if (direction.topRight(i, j)) mines++;
      }
      if (i < matrixHeight - 1) {
        if (direction.bottomLeft(i, j)) mines++;
        if (direction.bottom(i, j)) mines++;
        if (direction.bottomRight(i, j)) mines++;
      }
      if (direction.left(i, j)) mines++;
      if (direction.right(i, j)) mines++;
      finalMatrix[i][j] = mines;
      mines = 0;
    }
  }
  return finalMatrix;
}

solution(
  [
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]
);
