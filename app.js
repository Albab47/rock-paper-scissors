// get a random computer choice
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

let playerScore = 0;
let computerScore = 0;

// play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return roundResult.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return roundResult.textContent = "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return roundResult.textContent = "You Lose! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return roundResult.textContent = "You win! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return roundResult.textContent = "You Lose! Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return roundResult.textContent = "You win! Rock beats scissors";
    } else if (playerSelection === computerSelection) {
        return roundResult.textContent = "It's a tie!";
    }
}
//disable button so that user cannot continue to play
function disableBtn () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("disabled", 1);
    }
}

function enableBtn () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled");
    }
}

//Reset the game
function playAgain () {
    playerScore = 0;
    computerScore = 0;
    finalResult.textContent = "First to reach score 5 wins the game";
    roundResult.textContent = "";
    player_score.innerHTML = playerScore;
    computer_score.innerHTML = computerScore;
    enableBtn();
}

const finalResult = document.querySelector('.final-result')
const buttons = document.querySelectorAll('.btn');
const roundResult = document.querySelector('.round-result');
const scoreBoard = document.querySelector('#score-board');
const player_score = document.querySelector('.p-score');
const computer_score = document.querySelector('.c-score');

const restartBtn = document.querySelector(".restart-btn")
restartBtn.addEventListener('click',playAgain)

function handleBtnClick(e) {
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    player_score.textContent = playerScore;
    computer_score.textContent = computerScore;

    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            // scoreBoard.appendChild(winText);
            finalResult.textContent = "Congratulation! You win the game.";
            // restartBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>play again';
            disableBtn();
        } else if (playerScore < computerScore) {
            finalResult.textContent = "You lost! Better luck next time..";
            // scoreBoard.appendChild(loseText);
            // restartBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>try again';
            disableBtn();
        }
    }
    // console.log(computerSelection);
}

buttons.forEach((button) => {
    button.addEventListener('click', handleBtnClick);
});