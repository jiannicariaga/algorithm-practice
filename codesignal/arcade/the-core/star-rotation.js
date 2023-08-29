function solution(matrix, width, center, t) {
  const rotations = [
    i => [center[0] - i, center[1]],
    i => [center[0] - i, center[1] + i],
    i => [center[0], center[1] + i],
    i => [center[0] + i, center[1] + i],
    i => [center[0] + i, center[1]],
    i => [center[0] + i, center[1] - i],
    i => [center[0], center[1] - i],
    i => [center[0] - i, center[1] - i]
  ];
  const rotatedStar = matrix.map(row => row.slice());
  for (let i = 1; i <= (width - 1) / 2; i++) {
    for (let j = 0; j < 8; j++) {
      rotatedStar[rotations[(j + t % 8) % 8](i)[0]][rotations[(j + t % 8) % 8](i)[1]] =
        matrix[rotations[j](i)[0]][rotations[j](i)[1]];
    }
  }
  return rotatedStar;
}

solution([
  [1, 0, 0, 2, 0, 0, 3],
  [0, 1, 0, 2, 0, 3, 0],
  [0, 0, 1, 2, 3, 0, 0],
  [8, 8, 8, 9, 4, 4, 4],
  [0, 0, 7, 6, 5, 0, 0],
  [0, 7, 0, 6, 0, 5, 0],
  [7, 0, 0, 6, 0, 0, 5]
], 7, [3, 3], 1);

// (╯°□°)╯︵ ┻━┻
