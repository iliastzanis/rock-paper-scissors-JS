function getComputerChoise() {
  c = Math.random();
  if (c <= 0.25) {
    return "Rock";
  } else if (c <= 0.5) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoise() {
  let h;
  while (true) {
    h = prompt("Please enter your choise: Rock Paper or Scissors");
    h = h.charAt(0).toUpperCase() + h.slice(1).toLowerCase();
    if (h === "Rock" || h === "Paper" || h === "Scissors") {
      return h;
    } else {
      alert("You entered something Wrong please try again!");
    }
  }
}

function playRound(computerChoise, humanChoise) {
  // result 0 equals tie, result 1 equals user win, and result 2 equals computer win
  let result = 0;

  if (computerChoise === humanChoise) {
    alert("It's a tie");
    return result;
  }
  return result;
}

let computerSelection = getComputerChoise();
let humanSelection = getHumanChoise();

console.log(humanSelection);
console.log(computerSelection);

let humanScore = 0;
let computerScore = 0;

let RoundResult = playRound(computerSelection, humanSelection);

if (RoundResult === 1) {
  humanScore++;
} else if (RoundResult === 2) {
  computerScore++;
}
