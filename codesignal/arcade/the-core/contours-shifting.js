function solution(matrix) {
  const limit = matrix.length * matrix[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let x = 0;
  let y = 0;
  let di = 0;
  let layers = [];
  let currentLayer = [];
  for (let i = 0; i < limit; i++) {
    currentLayer.push(matrix[y][x]);
    matrix[y][x] = NaN;
    x += dx[di];
    y += dy[di];
    if (y >= matrix.length || isNaN(matrix[y][x])) {
      x -= dx[di];
      y -= dy[di];
      di = (di + 1) % dx.length;
      x += dx[di];
      y += dy[di];
      if (di === 0) {
        layers.push(currentLayer);
        currentLayer = [];
      }
    }
  }
  if (currentLayer.length !== 0) layers.push(currentLayer);
  layers = layers.map((val, i) => {
    i % 2 === 0 ? (val = [val.pop()].concat(val)) : val.push(val.splice(0, 1)[0]);
    return val.reverse();
  }).reverse();
  currentLayer = layers.pop();
  x = 0;
  y = 0;
  di = 0;
  for (let j = 0; j < limit; j++) {
    matrix[y][x] = currentLayer.pop();
    x += dx[di];
    y += dy[di];
    if (y >= matrix.length || x >= matrix[0].length || y < 0 || x < 0 || !isNaN(matrix[y][x])) {
      x -= dx[di];
      y -= dy[di];
      di = (di + 1) % dx.length;
      x += dx[di];
      y += dy[di];
      if (di === 0) currentLayer = layers.pop();
    }
  }
  return matrix;
}

solution([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
]);

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
