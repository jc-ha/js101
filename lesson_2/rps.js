const READLINE = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt('It\'s a tie.');
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  console.clear();
  prompt('Welcome to Rock Paper Scissors\n * * * * *');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.`);
  let choice = READLINE.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice.');
    choice = READLINE.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = READLINE.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter \'y\' or \'n\'.');
    answer = READLINE.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}
