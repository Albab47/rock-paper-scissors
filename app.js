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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else {
        return "It's a tie!";
    }  
}