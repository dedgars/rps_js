console.log("this is it")

function computerPlay() {
    const items = ["rock", "paper", "scissors"];
    randInt = Math.floor(Math.random() * items.length);
    let itemToPlay = items[randInt];
    console.log('computer plays ' + itemToPlay)
    return randInt;
}


function playRound(playerSelection, computerSelection){
    if ((playerSelection + 1) % 3 == computerSelection) {
        return('Computer wins')
    } else if ( playerSelection == computerSelection) {
        return('Draw')
    } else {
        return('Player wins')
    }
}

const playerSelection = 0
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))


