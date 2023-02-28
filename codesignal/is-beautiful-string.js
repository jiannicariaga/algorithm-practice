function solution(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const charCount = Array(alphabet.length).fill(0);
  for (const char of inputString) charCount[alphabet.indexOf(char)]++;
  for (let i = 0; i < charCount.length; i++) {
    if (charCount[i + 1] > charCount[i]) return false;
  }
  return true;
}

solution('bbbaacdafe');
