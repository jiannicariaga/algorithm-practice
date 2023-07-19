function solution(number, width) {
  const numDigits = `${number}`.length;
  return numDigits >= width
    ? `${number}`.slice(-width)
    : `${'0'.repeat(width - numDigits)}${number}`;
}

solution(1234, 2);
