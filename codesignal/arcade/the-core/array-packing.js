function solution(a) {
  const binary = [];
  const extBinary = [];
  for (const num10 of a) binary.push(num10.toString(2));
  for (const num2 of binary) {
    const bits = num2.split('');
    while (bits.length < 8) bits.unshift('0');
    extBinary.push(bits.join(''));
  }
  return parseInt(extBinary.reverse().join(''), 2);
}

solution([24, 85, 0]);
