function solution(picture) {
  const length = picture[0].length + 2;
  for (const index in picture) picture[index] = `*${picture[index]}*`;
  picture.unshift('*'.repeat(length));
  picture.push('*'.repeat(length));
  return picture;
}

solution(['abc', 'ded']);
