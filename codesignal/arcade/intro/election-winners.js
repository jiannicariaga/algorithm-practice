function solution(votes, k) {
  const highestVote = Math.max(...votes);
  const numOfWinners = votes.filter(v => v === highestVote).length;
  const finalWinner = votes.reduce((candidate, v) => {
    return candidate + ((v === highestVote && numOfWinners === 1) || v + k > highestVote ? 1 : 0);
  }, 0);
  return finalWinner;
}

solution([2, 3, 5, 2], 3);

// (╯°□°)╯︵ ┻━┻
