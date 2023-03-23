function solution(s) {
  let count = 1;
  let encodedString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      encodedString += count > 1 ? count + s[i] : s[i];
      count = 1;
    } else {
      count++;
    }
  }
  return encodedString;
}

solution('aabbbc');
