function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber < 3) {
        return "rock";
    } else if (randomNumber < 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "Enter the right choice (i.e: check your speling)";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Give your choice, Rock, Paper or Scissors?', '');
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log("Your score = " + playerScore);
        console.log("Computer score = " + computerScore);
    }
}

game();
