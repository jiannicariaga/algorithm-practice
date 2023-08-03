function solution(s1, s2) {
  const regex = /\d+/g;
  const token1 = s1.replace(regex, str => str.padStart(20, 0));
  const token2 = s2.replace(regex, str => str.padStart(20, 0));
  if (token1 < token2) return true;
  else if (token1 > token2) return false;
  else return s1.padEnd(20, 'Z') < s2.padEnd(20, 'Z');
}

solution('a', 'a1');

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
