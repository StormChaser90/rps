// Global variables
// Initialise player score to zero
let playerScore = 0;
// Initialise computer score to zero
let computerScore = 0;
// Initialise games played to zero
let currentRound = 1;
// array containing choices
let choices = ["rock", "paper", "scissors"];

// display computerScore
document.getElementById("computerScore").innerHTML = computerScore;
// display currentRound
document.getElementById("currentRound").innerHTML = currentRound;
// display playerScore
document.getElementById("playerScore").innerHTML = playerScore;

// when player selects rock
function rock() {
  txt = "You chose rock";
  document.getElementById("playerChoice").innerHTML = txt;
  // funtion that randomly generates the computers
  // choice, compares against players choice,
  // and declares winner/loser or tie.
  function computerPlay() {
    // random function to choose from array
    let random = choices[Math.floor(Math.random() * choices.length)];
    // log computers random choice
    txtC = "Computer chose " + random;
    // display computers choice on screen
    document.getElementById("computerChoice").innerHTML = txtC;
    // display winner/loser/tie
    if (random === "scissors") {
      playerScore++;
      alert("You won round!");
    } else if (random === "rock") {
      alert("TIE!");
    } else if (random === "paper") {
      computerScore++;
      alert("You lost round!");
    }
    // update computerScore
    document.getElementById("computerScore").innerHTML = computerScore;
    // update currentRound
    document.getElementById("currentRound").innerHTML = currentRound;
    // update playerScore
    document.getElementById("playerScore").innerHTML = playerScore;
  }
  currentRound++;
  computerPlay();
  // counter that alerts first to 5 points
  if (playerScore === 5) {
    alert("YOU WIN THE GAME!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Sorry, loser. The computer won!");
    resetGame();
  }
}

// when player selects paper
function paper() {
  txt = "You chose paper";
  document.getElementById("playerChoice").innerHTML = txt;
  // funtion that randomly generates the computers
  // choice, compares against players choice,
  // and declares winner/loser or tie.
  function computerPlay() {
    // random function to choose from array
    let random = choices[Math.floor(Math.random() * choices.length)];
    // log computers random choice
    txtC = "Computer chose " + random;
    // display computers choice on screen
    document.getElementById("computerChoice").innerHTML = txtC;
    // display winner/loser/tie
    if (random === "rock") {
      playerScore++;
      alert("You won round!");
    } else if (random === "paper") {
      alert("TIE!");
    } else if (random === "scissors") {
      computerScore++;
      alert("You lost round!");
    }
    // update computerScore
    document.getElementById("computerScore").innerHTML = computerScore;
    // update currentRound
    document.getElementById("currentRound").innerHTML = currentRound;
    // update playerScore
    document.getElementById("playerScore").innerHTML = playerScore;
  }
  currentRound++;
  computerPlay();
  // counter that alerts first to 5 points
  if (playerScore === 5) {
    alert("YOU WIN THE GAME!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Sorry, loser. The computer won!");
    resetGame();
  }
}

// when player selects scissors
function scissors() {
  txt = "You chose scissors";
  document.getElementById("playerChoice").innerHTML = txt;
  // funtion that randomly generates the computers
  // choice, compares against players choice,
  // and declares winner/loser or tie.
  function computerPlay() {
    // random function to choose from array
    let random = choices[Math.floor(Math.random() * choices.length)];
    // log computers random choice
    txtC = "Computer chose " + random;
    // display computers choice on screen
    document.getElementById("computerChoice").innerHTML = txtC;
    // display winner/loser/tie
    if (random === "paper") {
      playerScore++;
      alert("You won round!");
    } else if (random === "scissors") {
      alert("TIE!");
    } else if (random === "rock") {
      computerScore++;
      alert("You lost round!");
    }
    // update computerScore
    document.getElementById("computerScore").innerHTML = computerScore;
    // update currentRound
    document.getElementById("currentRound").innerHTML = currentRound;
    // update playerScore
    document.getElementById("playerScore").innerHTML = playerScore;
  }
  currentRound++;
  computerPlay();
  // counter that alerts first to 5 points
  if (playerScore === 5) {
    alert("YOU WIN THE GAME!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Sorry, loser. The computer won!");
    resetGame();
  }
}

// reset game after first to 5 points
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
}
