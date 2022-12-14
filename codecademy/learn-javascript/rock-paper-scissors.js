/* eslint-disable no-console */

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') return userInput;
  else console.log('invalid input.');
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return 'rock';
  else if (randomNumber === 1) return 'paper';
  else if (randomNumber === 2) return 'scissors';
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'tie!';
  else if (userChoice === 'rock') return computerChoice === 'paper' ? 'computer wins!' : 'user wins!';
  else if (userChoice === 'paper') return computerChoice === 'scissors' ? 'computer wins!' : 'user wins!';
  else if (userChoice === 'scissors') return computerChoice === 'rock' ? 'computer wins!' : 'user wins!';
};
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('userChoice:', userChoice);
  console.log('computerChoice:', computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
