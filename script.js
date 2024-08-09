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

function playRound (humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log("It's a draw! Rock equals rock!");
        } 
        else if (computerChoice === 'paper') {
            console.log("You lose! Paper beats rock!");
            computerScore += 1;
        }
        else {
            console.log("You win! Rock beats scissors!");
            humanScore += 1;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log("You win! Paper beats rock!");
            humanScore += 1;
        } 
        else if (computerChoice === 'paper') {
            console.log("It's a draw! Paper equals paper!");
        }
        else {
            console.log("You lose! Scissors beats paper!");
            computerScore += 1;
        }
    }
    else {
        if (computerChoice === 'rock') {
            console.log("You lose! Rock beats scissors!");
            computerScore += 1;
            
        } 
        else if (computerChoice === 'paper') {
            console.log("You win! Scissors beats paper!");
            humanScore += 1;
        }
        else {
            console.log("It's a draw! Scissors equals paper!");
        }
    }
}
