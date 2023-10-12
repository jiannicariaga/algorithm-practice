function solution(part, total) {
  const [pHours, pMinutes, pSeconds] = part.split(':').map(Number);
  const [tHours, tMinutes, tSeconds] = total.split(':').map(Number);
  const pTimeInSeconds = (pHours * 3600) + (pMinutes * 60) + pSeconds;
  const tTimeInSeconds = (tHours * 3600) + (tMinutes * 60) + tSeconds;
  const gcd = (a, b) => !b ? a : gcd(b, a % b);
  const mcd = gcd(pTimeInSeconds, tTimeInSeconds);
  return [pTimeInSeconds / mcd, tTimeInSeconds / mcd];
}

solution('02:20:00', '07:00:00');
