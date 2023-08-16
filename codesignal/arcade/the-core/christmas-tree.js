function solution(levelNum, levelHeight) {
  const maxWidth = 5 + (levelHeight + levelNum - 2) * 2;
  const crown = [' '.repeat((maxWidth - 1) / 2) + '*', ' '.repeat((maxWidth - 1) / 2) + '*', ' '.repeat((maxWidth - 3) / 2) + '***'];
  const levels = [];
  const foot = [];
  for (let i = 0; i < levelNum; i++) {
    for (let j = 0; j < levelHeight; j++) {
      levels.push(`${' '.repeat(levelHeight - 1 - j + (levelNum - i - 1))}${'*'.repeat(5 + 2 * (j + i))}`);
    }
    foot.push(`${' '.repeat((maxWidth - 1) / 2 - Math.floor(levelHeight / 2))}${'*'.repeat(levelHeight + (levelHeight % 2 === 0 ? 1 : 0))}`);
  }
  return crown.concat(levels, foot);
}

solution(1, 3);
