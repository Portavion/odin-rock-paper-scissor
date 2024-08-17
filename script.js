function getComputerChoice() {
    // Returns the computer choice amongst rock paper or scissor

    let randomChoice = Math.floor(Math.random()*3); // assigns 0, 1 or 2
    let computerChoice = '';

    if (randomChoice === 0) {
        computerChoice = 'rock';
    }
    else if (randomChoice === 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors'
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('What is your choice?', 'Rock paper or scissors');
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function checkWinner(humanScore, computerScore) {
    let resultDiv = document.querySelector('.result');
    if ((computerScore + humanScore) === 5) {
        if (computerScore > humanScore){
            resultDiv.textContent='Computer wins!';
        }
        else {
            resultDiv.textContent='Human wins!';
        }
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    let result = document.querySelector('.result');
    let score = document.querySelector('.score');

    result.textContent='';
    score.textContent='';
}

function playRound (humanChoice, computerChoice) {
    let result = document.querySelector('.result');
    let score = document.querySelector('.score');

    if ((humanScore+computerScore)===5){
        resetGame();
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            result.textContent  = "It's a draw! Rock equals rock!";
        } 
        else if (computerChoice === 'paper') {
            result.textContent  = "You lose! Paper beats rock!";
            computerScore += 1;
        }
        else {
            result.textContent  = "You win! Rock beats scissors!";
            humanScore += 1;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            result.textContent = "You win! Paper beats rock!";
            humanScore += 1;
        } 
        else if (computerChoice === 'paper') {
            result.textContent = "It's a draw! Paper equals paper!";
        }
        else {
            result.textContent = "You lose! Scissors beats paper!";
            computerScore += 1;
        }
    }
    else {
        if (computerChoice === 'rock') {
            result.textContent = "You lose! Rock beats scissors!";
            computerScore += 1; 
        } 
        else if (computerChoice === 'paper') {
            result.textContent = "You win! Scissors beats paper!";
            humanScore += 1;
        }
        else {
            result.textContent = "It's a draw! Scissors equals paper!";
        }
    }
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    checkWinner(humanScore, computerScore);
}

function playRock(){
    playRound('rock', getComputerChoice());
}

function playPaper(){
    playRound('paper', getComputerChoice());
}

function playScissors(){
    playRound('scissors', getComputerChoice());
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);
