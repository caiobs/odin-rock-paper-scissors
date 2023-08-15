function getComputerChoice() {
   let randomChoice = Math.random()
   if (randomChoice <= 0.33) {
    return 'rock'
   } else if (randomChoice >= 0.67) {
    return 'paper'
   } else {
    return 'scissors'
   }
}

let playerSelection = prompt('Rock, paper or scissors?')
let computerSelection = getComputerChoice ()

function RockPaperScissors(playerSelection, computerSelection) {

    let stringLoser = `You Lose! ${computerSelection} beats ${playerSelection}`
    let stringWinner = `You Win! ${playerSelection} beats ${computerSelection}`

}
