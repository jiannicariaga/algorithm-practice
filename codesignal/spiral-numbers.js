function solution(n) {
  const matrix = Array.from({ length: n }, () => []);
  let counter = 1;
  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) matrix[startRow][i] = counter++;
    startRow++;
    for (let j = startRow; j <= endRow; j++) matrix[j][endCol] = counter++;
    endCol--;
    for (let k = endCol; k >= startCol; k--) matrix[endRow][k] = counter++;
    endRow--;
    for (let l = endRow; l >= startRow; l--) matrix[l][startCol] = counter++;
    startCol++;
  }
  return matrix;
}

solution(3);
