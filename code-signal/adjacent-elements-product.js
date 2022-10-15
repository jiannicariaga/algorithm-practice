function solution(inputArray) {
  const products = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    products.push(inputArray[i] * inputArray[i + 1]);
  }

  return Math.max(...products);
}

solution([3, 6, -2, -5, 7, 3]);
