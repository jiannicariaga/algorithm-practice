function solution(boardSize, initPosition, initDirection, k) {
  const verticalSteps = (initDirection[0] === 1 ? initPosition[0] : boardSize[0] - initPosition[0] - 1) + k;
  const horizontalSteps = (initDirection[1] === 1 ? initPosition[1] : boardSize[1] - initPosition[1] - 1) + k;
  let verticalBoards = Math.floor(verticalSteps / boardSize[0]) % 2;
  let horizontalBoards = Math.floor(horizontalSteps / boardSize[1]) % 2;
  verticalBoards = (verticalBoards + (initDirection[0] === -1 ? 1 : 0)) % 2;
  horizontalBoards = (horizontalBoards + (initDirection[1] === -1 ? 1 : 0)) % 2;
  const lastPosition = [verticalSteps % boardSize[0], horizontalSteps % boardSize[1]];
  if (verticalBoards === 1) lastPosition[0] = boardSize[0] - lastPosition[0] - 1;
  if (horizontalBoards === 1) lastPosition[1] = boardSize[1] - lastPosition[1] - 1;
  return lastPosition;
}

solution([3, 7], [1, 2], [-1, 1], 13);

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
