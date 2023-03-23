function solution(cell1, cell2) {
  const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const colors = [cell1, cell2].map(cell => {
    const firstCellIsDark = col.indexOf(cell[0]) % 2 === 1;
    return firstCellIsDark
      ? row.indexOf(cell[1]) % 2 === 1
      : row.indexOf(cell[1]) % 2 === 0;
  });
  return colors[0] === colors[1];
}

solution('A1', 'C3');
