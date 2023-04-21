function solution(a, b) {
  const binary = [];
  for (a; a <= b; a++) binary.push(a.toString(2));
  return binary.reduce((sum, val) => {
    let count = 0;
    for (const j of val) if (j === '1') count++;
    return sum + count;
  }, 0);
}

solution(2, 7);
