function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let message = "";

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoise();

    console.log(humanSelection);
    console.log(computerSelection);

    let RoundResult = playRound(computerSelection, humanSelection);

    if (RoundResult === 1) {
      humanScore++;
    } else if (RoundResult === 2) {
      computerScore++;
    }
  }

  if (humanScore === computerScore) {
    message = "Tie! No one won the game :(";
  } else if (humanScore > computerScore) {
    message =
      "You won! \nYour Score: " +
      humanScore +
      "\nComputer Score: " +
      computerScore;
  } else {
    message =
      "You Lost! \nYour Score: " +
      humanScore +
      "\nComputer Score: " +
      computerScore;
  }

  return message;
}

function playRound(computerChoise, humanChoise) {
  // result 0 equals tie, result 1 equals user win, and result 2 equals computer win
  let result = 0;

  if (computerChoise === humanChoise) {
    alert("It's a tie");
  } else if (computerChoise === "Rock") {
    if (humanChoise === "Paper") {
      alert("You Win! " + humanChoise + " beats " + computerChoise);
      result = 1;
    } else {
      alert("You Lose! " + humanChoise + " gets beaten by " + computerChoise);
      result = 2;
    }
  } else if (computerChoise === "Paper") {
    if (humanChoise === "Scissors") {
      alert("You Win! " + humanChoise + " beats " + computerChoise);
      result = 1;
    } else {
      alert("You Lose! " + humanChoise + " gets beaten by " + computerChoise);
      result = 2;
    }
  } else if (computerChoise === "Scissors") {
    if (humanChoise === "Rock") {
      alert("You Win! " + humanChoise + " beats " + computerChoise);
      result = 1;
    } else {
      alert("You Lose! " + humanChoise + " gets beaten by " + computerChoise);
      result = 2;
    }
  }
  return result;
}

alert("Let's play 5 rounds of Rock Paper Scissors!");

let gameWinner = playGame();

alert(gameWinner);
