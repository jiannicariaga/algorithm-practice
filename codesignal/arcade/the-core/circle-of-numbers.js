function solution(n, firstNumber) {
  const circle = [...Array(n).keys()];
  while (circle[0] !== firstNumber) circle.unshift(circle.pop());
  return circle[circle.length / 2];
}

solution(10, 2);
