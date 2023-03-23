function solution(inputArray) {
  let isArranged = false;
  const strings = [];
  const arrangeStrings = () => {
    for (const i in inputArray) {
      if (isArranged) break;
      strings.push(inputArray.splice(i, 1)[0]);
      inputArray.length === 0
        ? isArranged = isArranged || checkStrings()
        : arrangeStrings();
      inputArray.splice(i, 0, strings.pop());
    }
  };
  const checkStrings = () => {
    for (let j = 0; j < strings.length - 1; j++) {
      let differentChars = 0;
      for (let k = 0; k < strings[j].length; k++) {
        if (strings[j][k] !== strings[j + 1][k]) differentChars++;
      }
      if (differentChars !== 1) return false;
    }
    return true;
  };
  arrangeStrings();
  return isArranged;
}

solution(['aba', 'bbb', 'bab']);

// (╯°□°)╯︵ ┻━┻
