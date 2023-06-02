function solution(current, numberOfDigits) {
  const pages = [];
  while (numberOfDigits >= String(current).length) {
    numberOfDigits -= String(current).length;
    pages.push(current);
    current++;
  }
  return pages[pages.length - 1];
}

solution(1, 5);
