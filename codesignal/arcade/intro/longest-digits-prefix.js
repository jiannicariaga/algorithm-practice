function solution(inputString) {
  let prefix = '';
  for (const char of inputString) {
    if (isNaN(char) || char === ' ') break;
    prefix += char;
  }
  return prefix;
}

solution('123aa1');
