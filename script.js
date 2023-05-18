var isReversed = false;
var playerWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
var userName = "";

var randomHand = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "scissors";
  } else if (randomNumber == 1) {
    return "paper";
  } else {
    return "stone";
  }
};

var checkWin = function (playerChoice, computerChoice) {
  var gameResult = -1;
  if (playerChoice == computerChoice) {
    gameResult = 0;
  } else if (
    (playerChoice == "scissors" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "stone") ||
    (playerChoice == "stone" && computerChoice == "scissors")
  ) {
    gameResult = 1;
  }

  if (isReversed) {
    gameResult *= -1;
  }
  return gameResult;
};

var main = function (input) {
  if (userName == "") {
    if (input.length == 0) {
      return "Please enter your username!";
    } else {
      userName = input;
      return `Welcome to the game ${userName}! Type in Scissors, Paper, or Stone to play!`;
    }
  }
  if (input == "reverse") {
    isReversed = !isReversed;
    return isReversed
      ? "REVERSED MODE! REVERSING WIN AND LOSE CONDITIONS!"
      : "Back to normal rules";
  }
  var playerHand = input.toLowerCase();
  if (
    playerHand != "scissors" &&
    playerHand != "paper" &&
    playerHand != "stone"
  ) {
    return "Please only enter Scissors, Paper, or Stone!";
  }
  var computerHand = randomHand();
  var output = `You picked ${playerHand}, the computer picks ${computerHand}`;
  var gameResult = checkWin(playerHand, computerHand);
  if (gameResult == 0) {
    output += "<br /> <br /> It's a draw 🤷‍♂️";
    drawCount += 1;
  } else if (gameResult == 1) {
    output += `<br /> <br /> ${userName} wins! 👍`;
    playerWinCount += 1;
  } else {
    output += "<br /> <br /> Computer wins! 👎";
    computerWinCount += 1;
  }

  output += `<br /> <br /> Current standings: <br /> ${userName} Wins 🙋‍♂️: ${playerWinCount} <br /> Computer Wins 💻: ${computerWinCount} <br /> Total Draws 🎭: ${drawCount}`;
  return output;
};
