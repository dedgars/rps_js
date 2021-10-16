function computerPlay() {
    randInt = Math.floor(Math.random() * 3);
    return randInt;
}
function playRound(playerSelection, computerSelection){
    const items = ["Rock", "Paper", "Scissors"];
    if ((playerSelection + 1) % 3 == computerSelection) {
        return('Computer wins, ' + items[computerSelection] + ' beats ' + items[playerSelection]);
    } else if ( playerSelection == computerSelection) {
        return('Draw, both play ' + items[computerSelection])
    } else {
        return('Player wins, ' + items[playerSelection] + ' beats ' + items[computerSelection]);
    }
}
function game(rounds){
    const items = ["rock", "paper", "scissors"];
    for (let i = 0; i < rounds; i++ ){
        const playerInput = prompt('Enter your choice of Rock, Paper and Scissors: ')
        const playerSelection = items.indexOf(playerInput.toLowerCase)
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game(5)




