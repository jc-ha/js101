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
let score;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWin(player, computer) {
  return WINNING_COMBOS[player].includes(computer);
}

function isMatchOver(obj) {
  return obj.player === 5 || obj.computer === 5;
}

function retrievePlayerChoice() {
  prompt(`Choose: ${MESSAGES.acronyms}.`);
  let input = READLINE.question().toLowerCase();
  
  while (!VALID_ACRONYMS.includes(input)) {
    prompt(`${MESSAGES.invalidChoice}`);
    input = READLINE.prompt();
  }
  return MESSAGES[input];
}

function retrieveComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_ACRONYMS.length);
  let computerInput = VALID_ACRONYMS[randomIndex];
  return MESSAGES[computerInput];
}

function displayRoundWinner(player1, player2) {
  if (playerWin(player1, player2)) {
    prompt('You win.\n* * * * *');
  } else if (player1 === player2) {
    prompt('It\'s a tie.\n* * * * *');
  } else {
    prompt('Computer wins.\n* * * * *');
  }
}

function updateScore(player1, player2) {
  if (playerWin(player1, player2)) {
    score.player += 1;
  } else if (player1 === player2) {
  } else {
    score.computer += 1;
  }
}

function retrievePlayAgainAnswer() {
  prompt(`${MESSAGES.playAgain}`);
  let input = READLINE.question().toLowerCase();
  while (input !== 'y' && input !== 'n') {
    prompt('Please enter only \'y\' or \'n\'.');
    input = READLINE.question().toLowerCase();
  }
  return input;
}

// Start prog
while (true) {
  console.clear();
  prompt(`${MESSAGES.welcome}`);

  score = { player: 0, computer: 0 };

  while (!isMatchOver(score)) {
    prompt(`Your score is ${score.player} and Computer's score is ${score.computer}.`);

    let playerChoice = retrievePlayerChoice();
    let computerChoice = retrieveComputerChoice();
    
    prompt(`You chose ${playerChoice}, Computer chose ${computerChoice}.`);

    displayRoundWinner(playerChoice, computerChoice);
    updateScore(playerChoice, computerChoice);
  }

  if (score.player > score.computer) {
    prompt(`${MESSAGES.playerWin}`);
  } else {
    prompt(`${MESSAGES.computerWin}`);
  }

  let answer = retrievePlayAgainAnswer();
  if (answer[0] === 'n') break;
}
