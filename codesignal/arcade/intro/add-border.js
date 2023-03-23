function solution(picture) {
  const width = picture[0].length + 2;
  for (const index in picture) picture[index] = `*${picture[index]}*`;
  picture.unshift('*'.repeat(width));
  picture.push('*'.repeat(width));
  return picture;
}

solution(['abc', 'ded']);
