function solution(inputArray, result) {
  const checkCrossover = (a, b, result) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== result[i] && b[i] !== result[i]) return false;
    }
    return true;
  };
  let pairs = 0;
  for (let j = 0; j < inputArray.length - 1; j++) {
    for (let k = j + 1; k < inputArray.length; k++) {
      if (checkCrossover(inputArray[j], inputArray[k], result)) pairs++;
    }
  }
  return pairs;
}

solution(['abc', 'aaa', 'aba', 'bab'], 'bbb');
