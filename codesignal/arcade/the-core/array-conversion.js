function solution(inputArray) {
  let add = true;
  let tempArray = [];
  while (inputArray.length > 1) {
    for (let i = 0; i < inputArray.length; i += 2) {
      tempArray.push(add ? inputArray[i] + inputArray[i + 1] : inputArray[i] * inputArray[i + 1]);
    }
    inputArray = tempArray;
    tempArray = [];
    add = !add;
  }
  return inputArray[0];
}

solution([1, 2, 3, 4, 5, 6, 7, 8]);
