function solution(words) {
  const wordCombos = [];
  const wordsUsed = [];
  const getWordCombos = words => {
    for (let i = 0; i < words.length; i++) {
      const word = words.splice(i, 1)[0];
      wordsUsed.push(word);
      if (words.length === 0) wordCombos.push(wordsUsed.slice());
      getWordCombos(words);
      words.splice(i, 0, word);
      wordsUsed.pop();
    }
    return wordCombos;
  };
  const getSolutions = words => {
    let solutions = 0;
    for (let i = 0; i < words[0].length; i++) {
      let j = words[1].indexOf(words[0][i]);
      while (j >= 0) {
        for (let k = i + 2; k < words[0].length; k++) {
          let l = words[2].indexOf(words[0][k]);
          while (l >= 0) {
            for (let m = j + 2; m < words[1].length; m++) {
              let n = words[3].indexOf(words[1][m]);
              while (n >= 0) {
                if (words[3].length - n > k - i &&
                  words[2].length - l > m - j &&
                  words[3][k - i + n] === words[2][m - j + l]) {
                  solutions++;
                }
                n = words[3].indexOf(words[1][m], n + 1);
              }
            }
            l = words[2].indexOf(words[0][k], l + 1);
          }
        }
        j = words[1].indexOf(words[0][i], j + 1);
      }
    }
    return solutions;
  };
  return getWordCombos(words).reduce((solutions, combo) => solutions + getSolutions(combo), 0);
}

solution();

// (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻ (╯°□°)╯︵ ┻━┻
