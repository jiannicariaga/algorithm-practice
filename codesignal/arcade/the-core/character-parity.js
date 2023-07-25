function solution(symbol) {
  if (isNaN(symbol)) return 'not a digit';
  return symbol % 2 === 0 ? 'even' : 'odd';
}

solution('5');
