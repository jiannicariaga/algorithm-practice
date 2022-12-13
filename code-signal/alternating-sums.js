function solution(a) {
  const teams = [0, 0];
  for (const index in a) teams[index % 2] += a[index];
  return teams;
}

solution([50, 60, 60, 45, 70]);
