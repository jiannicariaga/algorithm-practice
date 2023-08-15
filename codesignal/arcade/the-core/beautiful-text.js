function solution(inputString, l, r) {
  for (let i = l; i <= r; i++) {
    const regex = RegExp('^(.{' + i + '}\\s)+.{' + i + '}$');
    if (regex.test(inputString)) return true;
  }
  return false;
}

solution('Look at this example of a correct text', 5, 15);

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
