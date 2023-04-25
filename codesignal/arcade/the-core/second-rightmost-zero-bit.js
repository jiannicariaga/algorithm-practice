function solution(n) {
  return Math.pow(2, n.toString(2).length - n.toString(2).lastIndexOf('0', n.toString(2).lastIndexOf('0') - 1) - 1);
}

solution(37);
