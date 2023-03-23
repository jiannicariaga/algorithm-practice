function solution(time) {
  const [hour, minute] = time.split(':');
  return hour < 24 && minute < 60;
}

solution('13:58');
