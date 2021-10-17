

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

paper.addEventListener('click', function (e) {
    game(e.target.id)
});

rock.addEventListener('click', function (e) {
    game(e.target.id)
});

scissors.addEventListener('click', function (e) {
    game(e.target.id)
});


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
function game(playerInput){
    const items = ["rock", "paper", "scissors"];
    const playerSelection = items.indexOf(playerInput)
    const computerSelection = computerPlay();
    const result = document.createElement('h3');
    result.style.color = 'blue';
    result.textContent = playRound(playerSelection, computerSelection);
    container.appendChild(result);
}






