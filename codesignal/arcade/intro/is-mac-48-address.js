function solution(inputString) {
  const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const address = inputString.split('-');
  if (address.length !== 6) return false;
  return (
    address.every(a => {
      const digits = a.split('');
      return digits.length !== 2 ? false : hex.includes(digits[0]) && hex.includes(digits[1]);
    })
  );
}

solution('00-1B-63-84-45-E6');
