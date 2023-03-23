function solution(s) {
  let chars = '';
  for (const i in s) if (!chars.includes(s[i])) chars += s[i];
  return chars.length;
}

solution('cabca');
