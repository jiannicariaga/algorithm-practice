function solution(inputString) {
  const charCount = {};
  let oddCount = 0;
  new Set(inputString).forEach(char => {
    let count = 0;
    for (const i in inputString) if (char === inputString[i]) count++;
    charCount[char] = count;
  });
  for (const i in charCount) if (charCount[i] % 2) oddCount++;
  return oddCount <= 1;
}

solution('aabb');
