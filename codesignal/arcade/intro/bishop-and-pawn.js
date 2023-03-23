function solution(bishop, pawn) {
  const bishopCol = bishop[0].charCodeAt();
  const bishopRow = Number(bishop[1]);
  const pawnCol = pawn[0].charCodeAt();
  const pawnRow = Number(pawn[1]);
  return Math.abs(bishopCol - pawnCol) === Math.abs(bishopRow - pawnRow);
}

solution('a1', 'c3');
