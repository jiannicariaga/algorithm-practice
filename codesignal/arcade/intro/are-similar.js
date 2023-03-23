function solution(a, b) {
  const indexes = [];
  for (const index in a) if (a[index] !== b[index]) indexes.push(index);
  if (!indexes.length) return true;
  if (indexes.length === 2) return a[indexes[0]] === b[indexes[1]] && a[indexes[1]] === b[indexes[0]];
  return false;
}

solution([1, 2, 3], [1, 2, 3]);

// (╯°□°)╯︵ ┻━┻
