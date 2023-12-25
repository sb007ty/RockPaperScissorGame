// rock-1,paper-2,scissor-3
let playerScore = 0,
  compScore = 0;
function userOp(e) {
  let userSelected = 0;
  console.log(this);
  let selected = this.value;
  //   console.log(selected);
  switch (selected) {
    case "Rock":
      userSelected = 1;
      break;
    case "Paper":
      userSelected = 2;
      break;
    case "Scissors":
      userSelected = 3;
      break;
    default:
      userSelected = 0;
  }
  console.log(userSelected, selected);

  compareUserAndComp(userSelected, selected, generateCompValue());
}
function generateCompValue() {
  return Math.floor(Math.random() * 3) + 1;
}
function compareUserAndComp(userSelected, userSelectedText, compValue) {
  let userWins = 0;
  if (userSelected == compValue) {
    userWins = 0;
  }

  if (userSelected == 1 && compValue == 2) {
    userWins = -1;
  }
  if (userSelected == 1 && compValue == 3) {
    userWins = 1;
  }
  if (userSelected == 2 && compValue == 1) {
    userWins = 1;
  }
  if (userSelected == 2 && compValue == 3) {
    userWins = -1;
  }
  if (userSelected == 3 && compValue == 1) {
    userWins = -1;
  }
  if (userSelected == 3 && compValue == 2) {
    userWins = 1;
  }
  //   console.log(compValue, userWins);
  generateResult(userSelected, userSelectedText, compValue, userWins);
}

function generateResult(userValue, userSelectedText, compValue, userWins) {
  let resultDiv = document.querySelector(".result-sec");
  console.log(resultDiv);
  resultDiv.classList.remove("hidden");
  let compSelectedText = "";
  if (compValue == 1) {
    compSelectedText = "Rock";
  } else if (compValue == 2) {
    compSelectedText = "Paper";
  } else {
    compSelectedText = "Scissors";
  }
  if (userWins > 0) {
    playerScore++;
    // compScore--;
  } else if (userWins < 0) {
    // playerScore--;
    compScore++;
  }
  let scoreEl = document.querySelector(".score");
  scoreEl.textContent = `Player: [${playerScore}] - Computer: [${compScore}]`;
  let selectedEl = document.querySelector(".selected");
  selectedEl.textContent = `Player: ${userSelectedText} - Computer: ${compSelectedText}`;
  let resultEl = document.querySelector(".result");
  resultEl.textContent =
    userWins > 0 ? "Player wins" : userWins < 0 ? "Computer  wins" : "Neutral";
}

function userWins(userWins) {}
let btns = document.querySelectorAll("input");
// console.log(btns);
for (let item of btns) {
  item.addEventListener("click", userOp);
}
