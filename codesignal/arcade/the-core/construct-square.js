function solution(s) {
  const getDigits = str => {
    const digits = [];
    while (str.length) {
      const char = str[0];
      digits.push(str.length - (str = str.replace(RegExp(char, 'g'), '')).length);
    }
    return digits.sort((a, b) => b - a).join('');
  };
  const digits = getDigits(s);
  const min = Number('1' + Array(Math.floor((s.length - 1) / 2)).fill(0).join(''));
  const max = Number(Array(Math.ceil(s.length / 2)).fill(9).join(''));
  for (var i = max + 1; i >= min - 1; i--) {
    if (getDigits(String(i * i)) === digits) return i ** 2;
  }
  return -1;
}

solution('ab');

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
