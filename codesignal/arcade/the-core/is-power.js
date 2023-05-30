function solution(n) {
  if (n === 1) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    let j = 2;
    for (j; Math.pow(i, j) < n; j++);
    if (Math.pow(i, j) === n) return true;
  }
  return false;
}

solution(125);

// (╯°□°)╯︵ ┻━┻
