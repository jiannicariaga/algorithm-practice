function solution(a, b) {
  let count = 0;
  while (true) {
    for (const x of a) {
      if (b.indexOf(x) < 0) return count;
      b = b.replace(x, '');
    }
    count++;
  }
}

solution('abc', 'abccba');

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
