function solution(n) {
  const nArr = n.toString().split('').map(n => parseInt(n));
  const firstHalfSum = nArr.slice(0, nArr.length / 2).reduce((sum, val) => sum + val);
  const secondHalfSum = nArr.slice(nArr.length / 2).reduce((sum, val) => sum + val);
  if (firstHalfSum === secondHalfSum) return true;
  return false;
}

solution(1240);
