function solution(arr) {
  if (arr[0] !== arr[arr.length - 1]) return false;
  const middle = arr.length % 2
    ? arr[Math.floor(arr.length / 2)]
    : arr[arr.length / 2] + arr[arr.length / 2 - 1];
  return [arr[0], middle, arr[arr.length - 1]].every(n => n === arr[0]);
}

solution([7, 2, 2, 5, 10, 7]);
