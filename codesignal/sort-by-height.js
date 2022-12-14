function solution(a) {
  const people = a.filter(height => height !== -1).sort((a, b) => a - b);
  for (const index in a) if (a[index] !== -1) a[index] = people.shift();
  return a;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);
