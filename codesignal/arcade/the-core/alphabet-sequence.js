function solution(s) {
  let subsequence = true;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) >= s.charCodeAt(i + 1)) subsequence = false;
  }
  return subsequence;
}

solution('effg');
