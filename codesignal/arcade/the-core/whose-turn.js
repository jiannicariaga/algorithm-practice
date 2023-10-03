function solution(p) {
  const getPosition = pos => {
    const position = pos.split('');
    position[0] = 1 + position[0].charCodeAt() - 'a'.charCodeAt();
    position[1] = Number(position[1]);
    return position;
  };
  p = p.split(';').map(pos => getPosition(pos));
  return (
    (p[0][0] + p[0][1] + p[1][0] + p[1][1]) % 2 ===
    (p[2][0] + p[2][1] + p[3][0] + p[3][1]) % 2
  );
}

solution('b1;g1;b8;g8');
