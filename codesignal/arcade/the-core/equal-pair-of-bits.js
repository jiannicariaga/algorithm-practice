function solution(n, m) {
  return (
    Math.pow(2,
      (
        (n ^ m)
          .toString(2)
          .split('')
          .reverse()
          .join('') + '0'
      ).indexOf('0')
    )
  );
}

solution(10, 11);
