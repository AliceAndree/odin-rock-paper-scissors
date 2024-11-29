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
      console.log(`Computer's choice: ${rock}`);
      return rock;
      break;
    case 2:
      console.log(`Computer's choice: ${paper}`);
      return paper;
      break;
    case 3:
      console.log(`Computer's choice: ${scissors}`);
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
      console.log(`Your choice: ${rock}`);
      return rock;
      break;
    case "paper":
      console.log(`Your choice: ${paper}`);
      return paper;
      break;
    case "scissors":
      console.log(`Your choice: ${scissors}`);
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

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === rock) {
//     console.log("HUMAN: ROCK");
//     if (computerChoice === paper) {
//       console.log("COMPUTER PAPER");
//       return "Computer wins!";
//     } else if (computerChoice === scissors) {
//       console.log("COMPUTER SCISSORS");
//       return "You win!";
//     } else {
//       return "Round is null...";
//     }
//   } else if (humanChoice === paper) {
//     console.log("HUMAN: PAPER");
//     if (computerChoice === scissors) {
//       console.log("COMPUTER SCISSORS");
//       return "Computer wins!";
//     } else if (computerChoice === rock) {
//       console.log("COMPUTER ROCK");
//       return "You win!";
//     } else {
//       return "Round is null...";
//     }
//   } else if (humanChoice === scissors) {
//     console.log("HUMAN: SCISSORS");
//     if (computerChoice === rock) {
//       console.log("COMPUTER ROCK");
//       return "Computer wins!";
//     } else if (computerChoice === paper) {
//       console.log("COMPUTER PAPER");
//       return "You win!";
//     } else {
//       return "Round is null...";
//     }
//   } else {
//     return "Unvalid round";
//   }
// }

function playRound(humanChoice, computerChoice) {
  if (humanChoice === rock && computerChoice === paper) {
    return "Computer wins!";
  } else if (humanChoice === rock && computerChoice === scissors) {
    return "You win!";
  } else if (humanChoice === paper && computerChoice === scissors) {
    return "Computer wins!";
  } else if (humanChoice === paper && computerChoice === rock) {
    return "You win!";
  } else if (humanChoice === scissors && computerChoice === rock) {
    return "Computer wins!";
  } else if (humanChoice === scissors && computerChoice === paper) {
    return "You win!";
  } else {
    return "Round is null...";
  }
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
