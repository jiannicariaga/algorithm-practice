function solution(comb1, comb2) {
  const toBinary = str => str.replace(/[*]/g, '1').replace(/[.]/g, '0');
  const [binStr1, binStr2] = [toBinary(comb1), toBinary(comb2)];
  const [binInt1, binInt2] = [parseInt(binStr1, 2) << binStr2.length, parseInt(binStr2, 2)];
  const totalLength = binStr1.length + binStr2.length;
  let minLength = totalLength;
  for (let i = 0; i < totalLength; i++) {
    const position = Math.max(i + binStr2.length, totalLength) - Math.min(i, binStr2.length);
    if (!(binInt1 & (binInt2 << i)) && position < minLength) minLength = position;
  }
  return minLength;
}

solution('*..*', '*.*');

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
