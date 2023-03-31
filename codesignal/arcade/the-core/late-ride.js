function solution(n) {
  const time = (Math.floor(n / 60)).toString() + (n % 60).toString();
  return time.split('').map(Number).reduce((sum, digit) => sum + digit);
}

solution(240);
