let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const getAbsoluteDistance = (num1,num2) => Math.abs(num1 - num2);
const compareGuesses = (human,computer,secret=generateTarget()) => {
  if (human < 0 && human > 9) {
    return window.alert('User number is out of range.')
  }
  let humanGuess = getAbsoluteDistance(human,secret);
  let computerGuess = getAbsoluteDistance(computer,secret);
  if (humanGuess === computerGuess) {
    return true;
  } else if (humanGuess < computerGuess) {
    return true;
  } else {
    return false;
  }
};
const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;
const advanceRound = () => currentRoundNumber += 1;