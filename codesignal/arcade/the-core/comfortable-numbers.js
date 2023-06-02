function solution(l, r) {
  const s = x => {
    let sum = 0;
    while (x) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    return sum;
  };
  let pairs = 0;
  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= r; j++) {
      if (i + s(i) >= j && j - s(j) <= i) pairs++;
    }
  }
  return pairs;
}

solution(10, 12);

// (╯°□°)╯︵ ┻━┻
