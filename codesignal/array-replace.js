function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(elem => elem !== elemToReplace ? elem : substitutionElem);
}

solution([1, 2, 1], 1, 3);
