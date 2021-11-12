
let gameInfoDiv = document.getElementById("gameInfo")
let infoLinePara = document.createElement("p")
let infoLineText = document.createTextNode("Let's play!")
let playerResult = document.getElementById("playerResult")
let computerResult = document.getElementById("computerResult")
infoLinePara.setAttribute("id", "infoLine")
infoLinePara.appendChild(infoLineText)
gameInfoDiv.appendChild(infoLinePara)
elements = ["Rock", "Paper", "Scissors"]

function checkWin () {
    if (playerResult.innerText == 5) {
        infoLinePara.innerText = "Player wins the match"
        newGame()
    } else if (computerResult.innerText == 5) { 
        infoLinePara.innerText = "Computer wins the match"
        newGame()
    }}
    
function newGame () {
    playerResult.innerText = 0
    computerResult.innerText = 0

}



function computerPlay () {
    return Math.floor((Math.random() * 3))
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection + 1) % 3 == computerSelection) {
        computerResult.innerText = Number(computerResult.innerText) + 1
        return ('Computer wins, ' + elements[computerSelection] + ' beats ' + elements[playerSelection])
    } else if ( playerSelection == computerSelection) {
        return('Draw, both play ' + elements[computerSelection])
    } else {
        playerResult.innerText = Number(playerResult.innerText) + 1

        return('Player wins, ' + elements[playerSelection] + ' beats ' + elements[computerSelection])
    }
}

document.querySelectorAll('.element').forEach(item => {
    item.addEventListener('click', event => {
        infoLinePara.innerText = ""
        let playerSelection = elements.indexOf(item.innerText)
        let computerSelection = computerPlay()
        infoLinePara.innerText = playRound(playerSelection, computerSelection)
        checkWin()
    })
})


