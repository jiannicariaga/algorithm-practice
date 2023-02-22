function solution(value1, weight1, value2, weight2, maxW) {
  const totalWeight = weight1 + weight2;
  const totalValue = value1 + value2;
  if (totalWeight <= maxW) return totalValue;
  if (weight1 <= maxW && weight2 <= maxW) return Math.max(value1, value2);
  if (weight1 <= maxW) return value1;
  if (weight2 <= maxW) return value2;
  return 0;
}

solution(10, 5, 6, 4, 8);
