function solution(king, amazon) {
  const kx = king[0].charCodeAt() - 'a'.charCodeAt();
  const ky = Number(king[1]) - 1;
  const ax = amazon[0].charCodeAt() - 'a'.charCodeAt();
  const ay = Number(amazon[1]) - 1;
  const unsafe = Array(8).fill(false).map(_ => Array(8).fill(false));
  const line = (unsafe, ax, ay, kx, ky, x, y) => {
    for (let i = ay + y, j = ax + x; i < 8 && i >= 0 && j < 8 && j >= 0; i += y, j += x) {
      if (j === kx && i === ky) break;
      unsafe[i][j] = true;
    }
  };
  const leap = (unsafe, ax, ay, x, y) => {
    for (let i = ay - y; i <= ay + y; i += y << 1) {
      if (i >= 0 && i < 8) {
        for (let j = ax - x; j <= ax + x; j += x << 1) {
          if (j >= 0 && j < 8) unsafe[i][j] = true;
        }
      }
    }
  };
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i || j) {
        line(unsafe, ax, ay, kx, ky, j, i);
        if (ky + i >= 0 && ky + i < 8 && kx + j >= 0 && kx + j < 8) unsafe[ky + i][kx + j] = true;
      }
    }
  }
  leap(unsafe, ax, ay, 1, 2);
  leap(unsafe, ax, ay, 2, 1);
  const r = [0, 0, 0, 0];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((Math.abs(j - kx) > 1 || Math.abs(i - ky) > 1) && (i !== ay || j !== ax)) {
        let anySafe = false;
        for (let k = -1; k <= 1; k++) {
          for (let l = -1; l <= 1; l++) {
            if ((k || l) && i + k >= 0 && i + k < 8 && j + l >= 0 && j + l < 8) anySafe |= !unsafe[i + k][j + l];
          }
        }
        r[(!unsafe[i][j] << 1) | anySafe]++;
      }
    }
  }
  return r;
}

solution('d3', 'e4');

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
