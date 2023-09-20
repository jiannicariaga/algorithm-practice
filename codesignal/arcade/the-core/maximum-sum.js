function solution(a, q) {
  a.sort((b, c) => b - c);
  const counts = a.map((_, i) => {
    return {
      i,
      c: q.reduce((sum, query) => sum + (i >= query[0] && i <= query[1]), 0)
    };
  });
  counts.sort((b, c) => c.c - b.c);
  const maximumSum = Array(counts.length);
  for (let i = 0; i < counts.length; i++) {
    maximumSum[counts[i].i] = a.pop() * counts[i].c;
  }
  return maximumSum.reduce((b, c) => b + c);
}

solution([9, 7, 2, 4, 4], [[1, 3], [1, 4], [0, 2]]);

// (╯°□°)╯︵ ┻━┻
