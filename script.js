// Global score variables
let humanScore = 0;
let computerScore = 0;

// Main game function
function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    result = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${userChoice}`;
  }

  // Display result and scores
  document.getElementById('result').innerText = `
    You chose: ${userChoice}
    Computer chose: ${computerChoice}
    ${result}
    \nScores → You: ${humanScore} | Computer: ${computerScore}
  `;
}

  