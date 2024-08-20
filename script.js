let clickCount = 0;
let result = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => handleClick(button));
});

const computerScoreElement = document.getElementById("computerScore");
const playerScoreElement = document.getElementById("playerScore");
const tieScoreElement = document.getElementById("tieScore");
const gameInfoElement = document.getElementById("gameInfo");
const roundInfoElement = document.getElementById("roundInfo");


function handleClick(button) {
  let humanChoice = "";

  if (button.id === "btnRock") {
    humanChoice = "Rock";
  } else if (button.id === "btnPaper") {
    humanChoice = "Paper";
  } else if (button.id === "btnScissor") {
    humanChoice = "Scissors";
  } else {
    location.reload();
  }

  playRound(humanChoice);

  // Update scores
  if (result === 0) {
    tieScoreElement.innerText = parseInt(tieScoreElement.innerText) + 1;
  } else if (result === 1) {
    playerScoreElement.innerText = parseInt(playerScoreElement.innerText) + 1;
  } else {
    computerScoreElement.innerText =
      parseInt(computerScoreElement.innerText) + 1;
  }

  // Increment click count
  clickCount++;
  gameInfoElement.innerText = "Round " + (clickCount + 1);

  // Stop accepting inputs after 5 clicks
  if (clickCount >= 5) {
    setTimeout(() => {
      document.querySelectorAll("button").forEach((btn) => {
        if (btn.id === "restartBtn") {
          btn.disabled = false; // Restart button remains enabled
        } else {
          btn.disabled = true; // All other buttons are disabled
        } 
      });
      gameInfoElement.innerText = "Game over! 5 rounds have been played.";
    }, 0); // Use setTimeout to ensure the DOM updates first
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (computerChoice === humanChoice) {
    roundInfoElement.innerText = "It's a tie";
    result = 0;
  } else if (computerChoice === "Rock") {
    if (humanChoice === "Paper") {
      roundInfoElement.innerText =
        "You Win! " + humanChoice + " beats " + computerChoice;
      result = 1;
    } else {
      roundInfoElement.innerText =
        "You Lose! " + humanChoice + " gets beaten by " + computerChoice;
      result = 2;
    }
  } else if (computerChoice === "Paper") {
    if (humanChoice === "Scissors") {
      roundInfoElement.innerText =
        "You Win! " + humanChoice + " beats " + computerChoice;
      result = 1;
    } else {
      roundInfoElement.innerText =
        "You Lose! " + humanChoice + " gets beaten by " + computerChoice;
      result = 2;
    }
  } else if (computerChoice === "Scissors") {
    if (humanChoice === "Rock") {
      roundInfoElement.innerText =
        "You Win! " + humanChoice + " beats " + computerChoice;
      result = 1;
    } else {
      roundInfoElement.innerText =
        "You Lose! " + humanChoice + " gets beaten by " + computerChoice;
      result = 2;
    }
  }
}
