function solution(a, b) {
  const coordsA = Math.floor(Math.sqrt(a ** 2 / 2));
  const coordsB = Math.floor(Math.sqrt(b ** 2 / 2));
  return ((coordsA * coordsB) + Math.floor((coordsA + coordsB) / 2)) * 2 + 1;
}

solution(6, 4);

// (╯°□°)╯︵ ┻━┻
