const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const buttons = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(buttonValue) {
  let humanChoice = buttonValue;

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

// Logic to play a single round

function playRound(humanChoice, computerChoice) {
  if (humanChoice === rock && computerChoice === paper) {
    computerScore++;
    console.log("Computer wins!");
    return "Computer wins!";
  } else if (humanChoice === rock && computerChoice === scissors) {
    humanScore++;
    console.log("You win!");
    return "You win!";
  } else if (humanChoice === paper && computerChoice === scissors) {
    computerScore++;
    console.log("Computer wins!");
    return "Computer wins!";
  } else if (humanChoice === paper && computerChoice === rock) {
    humanScore++;
    console.log("You win!");
    return "You win!";
  } else if (humanChoice === scissors && computerChoice === rock) {
    computerScore++;
    console.log("Computer wins!");
    return "Computer wins!";
  } else if (humanChoice === scissors && computerChoice === paper) {
    humanScore++;
    console.log("You win!");
    return "You win!";
  } else {
    console.log("Round is null");
    return "Round is null...";
  }
}

// Function that starts the entire game (for five rounds)

function playGame(buttonValue) {
  const humanSelection = getHumanChoice(buttonValue);
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

// playGame();

// EVENT LISTENER

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonValue = e.target.parentNode.value;
    if (humanScore != 5 && computerScore != 5) {
      playGame(buttonValue);
    }
  });
});
