const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const buttons = document.querySelectorAll("button");
const topSection = document.querySelector(".top-section");
const middleSection = document.querySelector(".middle-section");
const bottomSection = document.querySelector(".bottom-section");
const pinkStar = document.querySelector("#pink-star");
const blueStar = document.querySelector("#blue-star");
const scissorsHand = document.createElement("img");
const paperHand = document.createElement("img");
const rockHand = document.createElement("img");
const youWon = document.createElement("img");
const youLose = document.createElement("img");
const tieScore = document.createElement("img");
let humanScore = 0;
let computerScore = 0;

scissorsHand.src = "./assets/scissors-hand.svg";
scissorsHand.setAttribute("id", "scissors-hand");

paperHand.src = "./assets/paper-hand.svg";
paperHand.setAttribute("id", "paper-hand");

rockHand.src = "./assets/rock-hand.svg";
rockHand.setAttribute("id", "rock-hand");

youWon.src = "./assets/you-won.svg";
youWon.setAttribute("id", "you-won");

youLose.src = "./assets/you-lose.svg";
youLose.setAttribute("id", "you-lose");

tieScore.src = "./assets/tie-score.svg";
tieScore.setAttribute("id", "tie-score");

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
    showResult();
    scissorsHand.style.display = "none";
    topSection.insertBefore(youLose, pinkStar);
    computerScore++;
  } else if (humanChoice === rock && computerChoice === scissors) {
    showResult();
    paperHand.style.display = "none";
    bottomSection.insertBefore(youWon, blueStar);
    bottomSection.style.paddingTop = "50px";
    youWon.style.marginRight = "42px";
    humanScore++;
  } else if (humanChoice === paper && computerChoice === scissors) {
    showResult();
    rockHand.style.display = "none";
    bottomSection.appendChild(youLose);
    bottomSection.style.paddingTop = "50px";
    youLose.style.marginRight = "42px";
    computerScore++;
  } else if (humanChoice === paper && computerChoice === rock) {
    showResult();
    scissorsHand.style.display = "none";
    topSection.insertBefore(youWon, pinkStar);
    humanScore++;
  } else if (humanChoice === scissors && computerChoice === rock) {
    showResult();
    paperHand.style.display = "none";
    bottomSection.insertBefore(youLose, blueStar);
    bottomSection.style.paddingTop = "50px";
    youLose.style.marginRight = "42px";
    computerScore++;
  } else if (humanChoice === scissors && computerChoice === paper) {
    showResult();
    rockHand.style.display = "none";
    bottomSection.appendChild(youWon);
    bottomSection.style.paddingTop = "50px";
    youWon.style.marginRight = "42px";
    humanScore++;
  } else if (
    (humanChoice === scissors && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === paper) ||
    (humanChoice === rock && computerChoice === rock)
  ) {
    middleSection.style.display = "none";
    topSection.insertBefore(tieScore, pinkStar);
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

function showResult() {
  buttons.forEach((button) => {
    button.style.display = "none";
  });
  topSection.insertBefore(scissorsHand, pinkStar);
  topSection.style.padding = "0 44px";
  middleSection.style.display = "none";
  bottomSection.insertBefore(paperHand, blueStar);
  bottomSection.appendChild(rockHand);
  blueStar.style.alignSelf = "self-start";
}

// EVENT LISTENER

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    buttons.forEach((button) => {
      button.style.display = "none";
    });
    const buttonValue = e.target.parentNode.value;
    if (humanScore != 5 && computerScore != 5) {
      playGame(buttonValue);
    }
  });
});
