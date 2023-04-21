function solution(a) {
  return parseInt([...a.toString(2)].reverse('').join(''), 2);
}

solution(97);
