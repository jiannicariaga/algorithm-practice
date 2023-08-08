function solution(items) {
  const arr = [-1];
  for (let i = 1; i < items.length; i++) {
    let previousLess = -1;
    for (let j = 0; j < i; j++) {
      if (items[j] < items[i]) previousLess = items[j];
    }
    arr.push(previousLess);
  }
  return arr;
}

solution([3, 5, 2, 4, 5]);
