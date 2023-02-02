function solution(n) {
  return n.toString().split('').every(num => num % 2 === 0);
}

solution(248622);
