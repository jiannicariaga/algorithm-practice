function solution(image) {
  const toBlur = ([i, j]) => [
    [i, j],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1]
  ];
  const finalImage = image.slice(2).map(pixel => pixel.slice(2));
  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[i].length - 1; j++) {
      finalImage[i - 1][j - 1] = Math.floor(toBlur([i, j])
        .reduce((sum, pixel) => sum + image[pixel[0]][pixel[1]], 0) / 9
      );
    }
  }
  return finalImage;
}

solution(
  [
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
  ]
);

// (╯°□°)╯︵ ┻━┻
