function solution(s, t) {
  for (const i of s) t = t.replace(i, '');
  return t.length;
}

solution('AABAA', 'BBAAA');
