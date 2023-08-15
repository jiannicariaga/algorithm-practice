function solution(startPosition, speed) {
  let meetCount = -1;
  let currentMeet = -1;
  for (let i = 0; i < startPosition.length; i++) {
    for (let j = i + 1; j < startPosition.length; j++) {
      const meetPoint = (startPosition[i] - startPosition[j]) / (speed[j] - speed[i]);
      if (meetPoint >= 0) {
        currentMeet = 2;
        for (let k = j + 1; k < startPosition.length; k++) {
          if (startPosition[i] + speed[i] * meetPoint === startPosition[k] + speed[k] * meetPoint) currentMeet++;
        }
        if (currentMeet > meetCount) meetCount = currentMeet;
      }
    }
  }
  return meetCount;
}

solution([1, 4, 2], [27, 18, 24]);

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
