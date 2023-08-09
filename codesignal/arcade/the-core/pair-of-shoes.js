function solution(shoes) {
  while (shoes.length) {
    const shoe = shoes.pop();
    const index = shoes.findIndex(([type, size]) => type === 1 - shoe[0] && size === shoe[1]);
    if (index >= 0) shoes.splice(index, 1);
    else return false;
  }
  return true;
}

solution([[0, 21], [1, 23], [1, 21], [0, 23]]);
