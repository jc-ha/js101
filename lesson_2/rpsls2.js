// Define variables and functions
const READLINE = require('readline-sync');
const VALID_ACRONYMS = ['r', 'p', 'sc', 'l', 'sp'];
const MESSAGES = require('./rpsls_msgs.json');
const SCORE_TO_WIN = 5;
const WINNING_COMBOS = {
  rock:  ['scissors', 'lizard'],
  paper:  ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:  ['paper', 'spock'],
  spock: ['scissors', 'rock']
};
let playerScore;
let computerScore;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWin(player, computer) {
  return WINNING_COMBOS[player].includes(computer);
}

// Start prog
while (true) {
  console.clear();
  prompt(`${MESSAGES.welcome}`);

  playerScore = 0;
  computerScore = 0;

  while (playerScore < SCORE_TO_WIN && computerScore < SCORE_TO_WIN) {
    prompt(`Your score is ${playerScore} and the computer's score is ${computerScore}.`);

    prompt(`Choose one: ${MESSAGES.acronyms}.`);
    let playerChoice = READLINE.question();

    while (!VALID_ACRONYMS.includes(playerChoice)) {
      prompt(`${MESSAGES.invalidChoice}`);
      playerChoice = READLINE.prompt();
    }
    playerChoice = MESSAGES[playerChoice];

    let randomIndex = Math.floor(Math.random() * VALID_ACRONYMS.length);
    let computerChoice = VALID_ACRONYMS[randomIndex];
    computerChoice = MESSAGES[computerChoice];

    if (playerWin(playerChoice, computerChoice)) {
      prompt('You win.\n* * * * *');
      playerScore += 1;
    } else if (playerChoice === computerChoice) {
      prompt('It\'s a tie.\n* * * * *');
    } else {
      prompt('Computer wins.\n* * * * *');
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    prompt(`${MESSAGES.playerWin}`);
  } else {
    prompt(`${MESSAGES.computerWin}`);
  }

  prompt(`${MESSAGES.playAgain}`);
  let answer = READLINE.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter \'y\' or \'n\'.');
    answer = READLINE.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
