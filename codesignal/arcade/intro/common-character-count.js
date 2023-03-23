function solution(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let count = 0;
  for (const i in s1Arr) {
    for (const j in s2Arr) {
      if (s1Arr[i] === s2Arr[j]) {
        count++;
        s2Arr.splice(j, 1);
        break;
      }
    }
  }
  return count;
}

solution('aabcc', 'adcaa');
