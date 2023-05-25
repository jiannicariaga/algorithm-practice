function solution(arr) {
  if (arr.length % 2 === 0) {
    const middleRight = Math.floor(arr.length / 2);
    const newMiddle = arr[middleRight] + arr[middleRight - 1];
    arr.splice(middleRight - 1, 2, newMiddle);
  }
  return arr;
}

solution([7, 2, 2, 5, 10, 7]);
