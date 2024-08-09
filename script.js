function getComputerChoice() {
    // Returns the computer choice amongst rock paper or scissor
    let randomChoice = Math.floor(Math.random()*3);
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
