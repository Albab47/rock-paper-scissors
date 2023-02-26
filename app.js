let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// get a random computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// 🚩play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        roundWinner = "player";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore++;
        roundWinner = "computer";
    }
    updateScoreMsg(roundWinner, playerSelection, computerSelection);
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

// UI

const scoreInfo = document.getElementById('scoreInfo');
const scoreMassage = document.getElementById('scoreMassage');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const restartBtn = document.getElementById('restartBtn')
const gameoverModal = document.getElementById('gameoverModal');
const gameoverMsg = document.getElementById('gameoverMsg');
const overlay = document.getElementById('overlay');
const playAgainBtn = document.getElementById('playAgainBtn');

rockBtn.addEventListener('click', () => handleBtnClick('rock'));
paperBtn.addEventListener('click', () => handleBtnClick('paper'));
scissorsBtn.addEventListener('click', () => handleBtnClick('scissors'));
restartBtn.addEventListener('click', restartGame);
playAgainBtn.addEventListener('click', restartGame);

function handleBtnClick(playerSelection) {
    if (gameOver()) {
        onGameoverModal();
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (gameOver()) {
        onGameoverModal();
        finalMsg();
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            playerSign.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
            break;
        case "paper":
            playerSign.innerHTML = '<i class="fa-solid fa-hand"></i>';
            break;
        case "scissors":
            playerSign.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
            break;
    }

    switch (computerSelection) {
        case "rock":
            computerSign.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
            break;
        case "paper":
            computerSign.innerHTML = '<i class="fa-solid fa-hand"></i>';
            break;
        case "scissors":
            computerSign.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
            break;
    }
}

function updateScore () {
    if (roundWinner === "tie") {
        scoreInfo.textContent = "It's a tie";
    } else if (roundWinner === "player") {
        scoreInfo.textContent = "You win!";
    } else if (roundWinner === "computer") {
        scoreInfo.textContent = "You lose!";
    }

    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function updateScoreMsg (winner, playerSelection, computerSelection) {
    if (winner === "player") {
        scoreMassage.textContent = `${playerSelection} 
        beats ${computerSelection}`;
    } else if (winner === "computer") {
        scoreMassage.textContent = `${playerSelection} 
        is beaten by ${computerSelection}`;
    } else {
        scoreMassage.textContent = `${playerSelection} 
        ties with ${computerSelection}`;
    }
}

function onGameoverModal () {
    overlay.style.display = "block";
}

function offGameoverModal () {
    overlay.style.display = "none";
}

function finalMsg () {
    (playerScore > computerScore) ?
    gameoverMsg.textContent = "🔥You win!" :
    gameoverMsg.textContent = "You lost..";
}

// When game end or player hit restart
function restartGame () {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    scoreInfo.textContent = 'Choose your selection';
    scoreMassage.textContent = 'First to reach score 5 wins the game!';
    playerSign.innerHTML = '<i class="fa-solid fa-question"></i>';
    computerSign.innerHTML = '<i class="fa-solid fa-question"></i>';
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `computer: ${computerScore}`;
    offGameoverModal();
}