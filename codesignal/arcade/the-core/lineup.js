function solution(commands) {
  let count = 0;
  let same = true;
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    if (command === 'L' || command === 'R') same = !same;
    if (same) count++;
  }
  return count;
}

solution('LLARL');

// (╯°□°)╯︵ ┻━┻
