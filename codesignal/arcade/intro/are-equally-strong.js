function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const you = [yourLeft, yourRight].sort().join('');
  const friend = [friendsLeft, friendsRight].sort().join('');
  return you === friend;
}

solution(10, 15, 15, 10);
