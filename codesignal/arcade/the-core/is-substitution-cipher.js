function solution(string1, string2) {
  return [...string1].every((c, i) => string1.indexOf(c) === string2.indexOf(string2[i]));
}

solution('aacb', 'aabc');
