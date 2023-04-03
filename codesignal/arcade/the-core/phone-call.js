function solution(min1, min2to10, min11, s) {
  let minutes = 0;
  let cents = s;
  if (cents >= min1) {
    cents -= min1;
    minutes++;
  }
  if (cents >= min2to10) {
    const time = Math.min(9, cents / min2to10);
    minutes += time;
    cents -= min2to10 * time;
  }
  if (cents >= min11) {
    minutes += cents / min11;
  }
  return Math.floor(minutes);
}

solution(3, 1, 2, 20);
