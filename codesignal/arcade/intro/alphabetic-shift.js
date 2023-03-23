function solution(inputString) {
  let shiftedString = '';
  for (let i = 0; i < inputString.length; i++) {
    shiftedString += inputString.charCodeAt(i) === 122
      ? 'a'
      : String.fromCharCode(inputString.charCodeAt(i) + 1);
  }
  return shiftedString;
}

solution('crazy');
