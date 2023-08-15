function solution(startPosition, speed) {
  let meetings = 1;
  for (let i = 0; i < startPosition.length; i++) {
    for (let j = i + 1; j < startPosition.length; j++) {
      const distDiff = startPosition[j] - startPosition[i];
      const speedDiff = speed[i] - speed[j];
      let count = 0;
      if (speedDiff === 0 && distDiff !== 0) continue;
      for (let k = 0; k < startPosition.length; k++) {
        if (startPosition[k] * speedDiff + speed[k] * distDiff === startPosition[i] * speedDiff + speed[i] * distDiff) count++;
      }
      if (!count) continue;
      if (count > meetings) meetings = count;
    }
  }
  if (meetings < 2) meetings = -1;
  return meetings;
}

solution([1, 4, 2], [27, 18, 24]);

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
