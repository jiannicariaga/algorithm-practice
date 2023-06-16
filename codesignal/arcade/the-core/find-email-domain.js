function solution(address) {
  return address.slice(address.lastIndexOf('@') + 1);
}

solution('prettyandsimple@example.com');
