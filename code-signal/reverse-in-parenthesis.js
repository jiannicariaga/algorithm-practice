function solution(inputString) {
  const regExp = /\([A-Za-z]*\)/;
  while (regExp.test(inputString)) {
    inputString = inputString.replace(regExp, subStr =>
      subStr.slice(1, subStr.length - 1).split('').reverse().join('')
    );
  }
  return inputString;
}

solution('(bar)');

// (╯°□°)╯︵ ┻━┻
