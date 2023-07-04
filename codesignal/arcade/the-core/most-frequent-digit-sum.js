function solution(n) {
  const sumCounts = [];
  let maxCount = 0;
  let sumsAtMax = [];
  while (n > 0) {
    const sum = n.toString().split('').map(Number).reduce((a, b) => a + b);
    sumCounts[sum] ? sumCounts[sum]++ : sumCounts[sum] = 1;
    if (sumCounts[sum] > maxCount) {
      maxCount = sumCounts[sum];
      sumsAtMax = [sum];
    } else if (sumCounts[sum] === maxCount) {
      sumsAtMax.push(sum);
    }
    n = n - sum;
  }
  return sumsAtMax.sort((a, b) => b - a)[0];
}

solution(88);
