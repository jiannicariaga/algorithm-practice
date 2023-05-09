function solution(n) {
  const revNumber = n.toString().split('').reverse();
  let canIncrease = false;
  for (const i of revNumber) {
    if (i !== '0') canIncrease = true;
    else if (canIncrease && i === '0') return true;
  }
  return false;
}

solution(902200100);
