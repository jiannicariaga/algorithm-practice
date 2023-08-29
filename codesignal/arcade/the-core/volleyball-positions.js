function solution(formation, k) {
  for (let i = 0; i < k % 6; i++) {
    const temp = formation[1][0];
    formation[1][0] = formation[0][1];
    formation[0][1] = formation[1][2];
    formation[1][2] = formation[3][2];
    formation[3][2] = formation[2][1];
    formation[2][1] = formation[3][0];
    formation[3][0] = temp;
  }
  return formation;
}

solution(
  [
    ['empty', 'Player5', 'empty'],
    ['Player4', 'empty', 'Player2'],
    ['empty', 'Player3', 'empty'],
    ['Player6', 'empty', 'Player1']
  ], 2);

// (╯°□°)╯︵ ┻━┻
