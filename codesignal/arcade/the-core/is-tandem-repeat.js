function solution(inputString) {
  const length = inputString.length;
  const firstHalf = inputString.substr(0, length / 2);
  const secondHalf = inputString.substr(length / 2);
  return length % 2 === 0 && firstHalf === secondHalf;
}

solution('tandemtandem');
