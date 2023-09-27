function solution(cell) {
  const knightCol = cell[0].charCodeAt() - 'a'.charCodeAt() + 1;
  const knightRow = Number(cell[1]);
  const squares = [[1, 1], [1, 1], [1, 1], [1, 1]];
  let moves = 8;
  if (knightCol < 3) {
    moves -= squares[0][0];
    moves -= squares[0][1];
    squares[0][0] = 0;
    squares[0][1] = 0;
  }
  if (knightCol < 2) {
    moves -= squares[1][0];
    moves -= squares[1][1];
    squares[1][0] = 0;
    squares[1][1] = 0;
  }
  if (knightCol > 6) {
    moves -= squares[3][0];
    moves -= squares[3][1];
    squares[3][0] = 0;
    squares[3][1] = 0;
  }
  if (knightCol > 7) {
    moves -= squares[2][0];
    moves -= squares[2][1];
    squares[2][0] = 0;
    squares[2][1] = 0;
  }
  if (knightRow < 3) {
    moves -= squares[1][1];
    moves -= squares[2][1];
    squares[1][1] = 0;
    squares[2][1] = 0;
  }
  if (knightRow < 2) {
    moves -= squares[0][1];
    moves -= squares[3][1];
    squares[0][1] = 0;
    squares[3][1] = 0;
  }
  if (knightRow > 6) {
    moves -= squares[1][0];
    moves -= squares[2][0];
    squares[1][0] = 0;
    squares[2][0] = 0;
  }
  if (knightRow > 7) {
    moves -= squares[0][0];
    moves -= squares[3][0];
    squares[0][0] = 0;
    squares[3][0] = 0;
  }
  return moves;
}

solution('a1');

// (╯°□°)╯︵ ┻━┻
