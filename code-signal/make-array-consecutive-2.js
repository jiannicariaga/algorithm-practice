function solution(statues) {
  const smallestSize = Math.min(...statues);
  const largestSize = Math.max(...statues);
  let statuesNeeded = 0;
  for (let i = smallestSize + 1; i < largestSize; i++) {
    if (!statues.includes(i)) statuesNeeded++;
  }
  return statuesNeeded;
}

solution([6, 2, 3, 8]);
