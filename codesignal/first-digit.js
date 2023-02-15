function solution(inputString) {
  for (const i in inputString) {
    if (!isNaN(parseInt(inputString[i]))) return inputString[i];
  }
}

solution('var_1__Int');
