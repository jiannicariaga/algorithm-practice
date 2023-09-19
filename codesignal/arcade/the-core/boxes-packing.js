function solution(length, width, height) {
  const doesFit = (a, b) => {
    if (a[0] < b[0] && a[1] < b[1] && a[2] < b[2]) return -1;
    if (a[0] > b[0] && a[1] > b[1] && a[2] > b[2]) return 1;
    return 0;
  };
  const boxes = [];
  for (let i = 0; i < height.length; i++) {
    boxes.push([length[i], width[i], height[i]].sort((a, b) => a - b));
  }
  boxes.sort(doesFit);
  for (let i = 1; i < boxes.length; i++) {
    if (doesFit(boxes[i - 1], boxes[i]) === 0) return false;
  }
  return true;
}

solution([1, 3, 2], [1, 3, 2], [1, 3, 2]);

// (╯°□°)╯︵ ┻━┻
