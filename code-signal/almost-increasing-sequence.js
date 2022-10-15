function solution(sequence) {
  let removed = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      removed++;

      if (removed > 1) {
        return false;
      }

      if (sequence[i - 2] >= sequence[i] && sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }

  return true;
}

solution([1, 3, 2, 1]);

// almostDecreasingLifespan*
