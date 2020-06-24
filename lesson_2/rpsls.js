const READLINE = require('readline-sync');
const VALID_ACRONYMS = ['r', 'p', 'sc', 'l', 'sp'];
const MESSAGES = require('./rpsls_msgs.json');
const SCORE_TO_WIN = 5;
let playerScore;
let computerScore;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getWinner(player, computer) {
  switch (player) {
    case 'r':
      if (computer === 'sc' || computer === 'l') {
        return 'You win.';
      } else if (computer === 'p' || computer === 'sp') {
        return 'Computer wins.';
      } else {
        return 'It\'s a tie.';
      }
    case 'p':
      if (computer === 'r' || computer === 'sp') {
        return 'You win.';
      } else if (computer === 'sc' || computer === 'l') {
        return 'Computer wins.';
      } else {
        return 'It\'s a tie.';
      }
    case 'sc':
      if (computer === 'p' || computer === 'l') {
        return 'You win.';
      } else if (computer === 'r' || computer === 'sp') {
        return 'Computer wins.';
      } else {
        return 'It\'s a tie.';
      }
    case 'l':
      if (computer === 'p' || computer === 'sp') {
        return 'You win.';
      } else if (computer === 'r' || computer === 'sc') {
        return 'Computer wins.';
      } else {
        return 'It\'s a tie.';
      }
    case 'sp':
      if (computer === 'sc' || computer === 'r') {
        return 'You win.';
      } else if (computer === 'p' || computer === 'l') {
        return 'Computer wins.';
      } else {
        return 'It\'s a tie.';
      }
  }
}

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

    let randomIndex = Math.floor(Math.random() * VALID_ACRONYMS.length);
    let computerChoice = VALID_ACRONYMS[randomIndex];

    let displayWinner = getWinner(playerChoice, computerChoice);
    prompt(displayWinner);

    if (displayWinner === 'You win.') {
      playerScore += 1;
    } else if (displayWinner === 'Computer wins.') {
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
