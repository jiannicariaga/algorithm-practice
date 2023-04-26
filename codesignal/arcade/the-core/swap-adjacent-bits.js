function solution(n) {
  return (
    parseInt(
      `${n.toString(2).length % 2 ? '0' : ''}${n.toString(2)}`
        .match(/.{1,2}/g)
        .map(pair => pair.split('').reverse().join(''))
        .join('')
      , 2)
  );
}

solution(13);
