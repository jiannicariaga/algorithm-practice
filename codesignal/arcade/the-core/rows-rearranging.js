function solution(matrix) {
  let isIncreasing = true;
  for (const i in matrix) {
    for (const j in matrix) {
      if (i !== j) {
        isIncreasing = isIncreasing && (
          matrix[i].every((value, index) => value > matrix[j][index]) ||
          matrix[i].every((value, index) => value < matrix[j][index])
        );
      }
    }
  }
  return isIncreasing;
}

solution([[2, 7, 1], [0, 2, 0], [1, 3, 1]]);
