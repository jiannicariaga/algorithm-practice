function solution(candlesNumber, makeNew) {
  let burnedCandles = candlesNumber;
  let leftovers = candlesNumber;
  while (leftovers >= makeNew) {
    const newCandles = Math.floor(leftovers / makeNew);
    leftovers = newCandles + (leftovers % makeNew);
    burnedCandles += newCandles;
  }
  return burnedCandles;
}

solution(5, 2);
