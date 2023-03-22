function solution(grid) {
  let isCorrect = true;
  isCorrect = grid.every(row => row.every((el, id, arr) => id === arr.indexOf(el)));
  isCorrect = isCorrect && grid[0]
    .map((_, i) => grid.map((_, j) => grid[j][i]))
    .every(row => row.every((el, id, arr) => id === arr.indexOf(el)));
  isCorrect = isCorrect && grid
    .map((_, i) => grid.map((_, j) => grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]))
    .every(row => row.every((el, id, arr) => id === arr.indexOf(el)));
  return isCorrect;
}

solution(
  [
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
  ]
);

// (╯°□°)╯︵ ┻━┻
