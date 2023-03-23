function solution(code) {
  const bytes = code.match(/.{1,8}/g);
  return bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}

solution('010010000110010101101100011011000110111100100001');
