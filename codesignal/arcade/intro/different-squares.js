function solution(matrix) {
  const squares = [];
  const isUnique = (i, j) => {
    return squares.every(pair => {
      return (
        pair[0][0] !== matrix[i - 1][j - 1] ||
        pair[0][1] !== matrix[i - 1][j] ||
        pair[1][0] !== matrix[i][j - 1] ||
        pair[1][1] !== matrix[i][j]
      );
    });
  };
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (isUnique(i, j)) {
        squares.push(
          [
            [matrix[i - 1][j - 1], matrix[i - 1][j]],
            [matrix[i][j - 1], matrix[i][j]]
          ]
        );
      }
    }
  }
  return squares.length;
}

solution(
  [
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1]
  ]
);
