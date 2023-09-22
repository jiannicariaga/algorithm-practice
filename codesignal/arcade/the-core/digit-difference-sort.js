function solution(a) {
  return a
    .map((n, i) => ({ n, i }))
    .sort((b, c) => {
      const bDigits = String(b.n).split('').map(Number);
      const cDigits = String(c.n).split('').map(Number);
      const bDiff = Math.max(...bDigits) - Math.min(...bDigits);
      const cDiff = Math.max(...cDigits) - Math.min(...cDigits);
      return bDiff !== cDiff ? bDiff - cDiff : c.i - b.i;
    })
    .map(obj => obj.n);
}

solution([152, 23, 7, 887, 243]);
