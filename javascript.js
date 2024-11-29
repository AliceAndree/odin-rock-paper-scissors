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

console.log(getComputerChoice());
