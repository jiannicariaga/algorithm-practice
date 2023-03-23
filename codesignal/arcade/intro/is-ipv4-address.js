function solution(inputString) {
  if (inputString.split('.').length !== 4) return false;
  const address = inputString.split('.').map(str =>
    str === '' || (str.startsWith('0') && str.length > 1) || isNaN(Number(str))
      ? null
      : Number(str)
  );
  return address.every(num => num !== null && num >= 0 && num <= 255);
}

solution('172.16.254.1');
