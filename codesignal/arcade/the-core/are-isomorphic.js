function solution(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((row, i) => row.length === array2[i].length)
  );
}

solution([[1, 1, 1], [0, 0]], [[2, 1, 1], [2, 1]]);
