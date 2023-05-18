function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(el => el === elemToReplace ? substitutionElem : el);
}

solution([1, 2, 1], 1, 3);
