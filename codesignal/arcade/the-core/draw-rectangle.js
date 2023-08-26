function solution(canvas, rectangle) {
  canvas[rectangle[1]][rectangle[0]] = '*';
  canvas[rectangle[3]][rectangle[2]] = '*';
  canvas[rectangle[1]][rectangle[2]] = '*';
  canvas[rectangle[3]][rectangle[0]] = '*';
  for (let i = rectangle[0] + 1; i < rectangle[2]; i++) {
    canvas[rectangle[1]][i] = '-';
    canvas[rectangle[3]][i] = '-';
  }
  for (let i = rectangle[1] + 1; i < rectangle[3]; i++) {
    canvas[i][rectangle[0]] = '|';
    canvas[i][rectangle[2]] = '|';
  }
  return canvas;
}

solution(
  [
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  ],
  [1, 1, 4, 3]
);
