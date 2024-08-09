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
