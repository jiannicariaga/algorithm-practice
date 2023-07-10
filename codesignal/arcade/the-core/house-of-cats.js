function solution(legs) {
  const house = [];
  for (let i = (legs % 4) / 2; i <= legs / 2; i += 2) house.push(i);
  return house;
}

solution(6);
