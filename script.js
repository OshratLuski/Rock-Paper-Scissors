"use strict";
let playerScore = 0;
let computerScore = 0;
// The computer choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}
// console.log(getComputerChoice());

//The player choice
function getPlayerChoice() {
  //A rock was chosen
  $("#rock").on("click", function () {
    game("r");
  });
  // A paper was chosen
  $("#paper").on("click", function () {
    game("p");
  });
  // scissors were chosen
  $("#scissors").on("click", function () {
    game("s");
  });
}
getPlayerChoice();

function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  playerScore++;
  $(".user-score").html(playerScore);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  $(".result-message").html(
    `${convertWord(userChoice)} ${smallUserWord} beats ${convertWord(
      computerChoice
    )} ${smallCompWord} !  You win 🔥`
  );
}

function loss(userChoice, computerChoice) {
  computerScore++;
  $(".computer-score").html(computerScore);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  $(".result-message").html(
    `${convertWord(computerChoice)}${smallCompWord} beats ${convertWord(
      userChoice
    )}${smallUserWord} !  You lost 👎`
  );
  // $(userChoice).addClass("red-glow");
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  $(".result-message").html(
    `${convertWord(userChoice)} ${smallUserWord} equal ${convertWord(
      computerChoice
    )} ${smallCompWord}  It's a draw ⚡`
  );
  // $(userChoice).addClass("gray-glow");
}

//The game
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      loss(computerChoice, userChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
