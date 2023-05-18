function solution(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return !arr[0] ? [] : arr;
}

solution([1, 2, 3, 4, 5]);
