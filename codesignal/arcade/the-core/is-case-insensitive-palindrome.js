function solution(inputString) {
  return inputString.toLowerCase().split('').reverse().join('') === inputString.toLowerCase();
}

solution('AaBaa');
