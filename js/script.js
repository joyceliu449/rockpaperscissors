$(".play").click(function () {

  let userInput = $(".input").val().toLowerCase();
  $(".userChoice").text(userInput);

  let computerChoice = "";
  let randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    computerChoice = "scissors";
  } else if (randomNumber === 2) {
    computerChoice = "rock";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  }
  $(".computerChoice").text(computerChoice);

  function result() {
    if (
      (userInput === "scissors" && computerChoice === "rock") ||
      (userInput === "rock" && computerChoice === "paper") ||
      (userInput === "paper" && computerChoice === "scissors")
    ) {
      return "Computer Wins";
    } else if (
      (userInput === "rock" && computerChoice === "scissors") ||
      (userInput === "paper" && computerChoice === "rock") ||
      (userInput === "scissors" && computerChoice === "paper")
    ) {
      return "User Wins";
    } else if (userInput === computerChoice) {
      return "It's a tie!";
    } else {
      $(".result").text("Please enter rock, paper, or scissors.");
      $(".userChoice").text("");
      $(".computerChoice").text("");
    }
  }


  $(".result").text(result());
  $(".input").val("");
});
