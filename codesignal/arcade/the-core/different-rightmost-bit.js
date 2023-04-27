function solution(n, m) {
  return (
    Math.pow(2,
      Math.abs(n - m)
        .toString(2)
        .split('')
        .reverse()
        .join('')
        .indexOf('1')
    )
  );
}

solution(11, 13);
