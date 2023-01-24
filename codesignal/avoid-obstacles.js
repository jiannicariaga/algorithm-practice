function solution(inputArray) {
  const furthestObstacle = Math.max(...inputArray);
  for (let i = 2; i < furthestObstacle; i++) {
    const isDivisible = inputArray.some(obstacle => obstacle % i === 0);
    if (!isDivisible) return i;
  }
  return furthestObstacle + 1;
}

solution([5, 3, 6, 7, 9]);

// (╯°□°)╯︵ ┻━┻
