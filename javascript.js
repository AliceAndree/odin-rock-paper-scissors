let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

// Get computer's choice between Rock(1), Paper(2) or Scissors(3)
function getComputerChoice() {
  const minNumber = 1;
  const maxNumber = 3;
  let randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );

  switch (randomNumber) {
    case 1:
      return rock;
      break;
    case 2:
      return paper;
      break;
    case 3:
      return scissors;
      break;
  }
}

// Get human's choice between Rock, Paper or Scissors.

function getHumanChoice() {
  let humanChoice = prompt("Please choose Rock, Paper or Scissors.");
  humanChoice = humanChoice.toLowerCase();

  switch (humanChoice) {
    case "rock":
      return rock;
      break;
    case "paper":
      return paper;
      break;
    case "scissors":
      return scissors;
      break;
    default:
      return "Please choose a valid option.";
  }
}

// Initialize scores

let humanScore = 0;
let comuterScore = 0;

// Logic the play a single round

function playRound(humanChoice, computerChoice) {
  if (humanChoice == rock) {
    if (computerChoice == paper) {
      return "Computer wins!";
    } else if (computerChoice == scissors) {
      return "You win!";
    } else {
      return "Round is null...";
    }
  } else if (humanChoice == paper) {
    if (computerChoice == scissors) {
      return "Computer wins!";
    } else if (computerChoice == rock) {
      return "You win!";
    } else {
      return "Round is null...";
    }
  } else if (humanChoice == scissors) {
    if (computerChoice == rock) {
      return "Computer wins!";
    } else if (computerChoice == paper) {
      return "You win!";
    } else {
      return "Round is null...";
    }
  } else {
    return "Unvalid round";
  }
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(`Computer's choice: ${getComputerChoice()}`);
console.log(playRound(humanSelection, computerSelection));
