function solution(rows) {
  const tempArr = rows.slice().reverse();
  const times = tempArr[0].split('').map((_, col) => {
    let temp = 0;
    let seconds = 0;
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i][col] === '.') {
        temp++;
      } else {
        seconds += temp;
        temp = 0;
      }
    }
    return { col, seconds };
  });
  return times
    .filter(c => c.seconds === Math.min(...times.map(t => t.seconds)))
    .map(c => c.col);
}

solution([
  '#..##',
  '.##.#',
  '.#.##',
  '.....'
]);

// (╯°□°)╯︵ ┻━┻
