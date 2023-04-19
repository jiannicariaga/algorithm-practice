function solution(n, k) {
  return (
    parseInt(n
      .toString(2)
      .split('')
      .map((el, i, arr) => i === arr.length - k ? '0' : el)
      .join('')
    , 2)
  );
}

solution(37, 3);
