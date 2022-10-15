function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0) return "rock";
    if(num === 1) return "paper";
    if(num === 2) return "scissors";
}
function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
        if(playerChoice === "rock"){
            if(computerSelection === "rock") return "Tie!";
            if(computerSelection === "paper") return "You lose! Paper beats Rock";
            if(computerSelection === "scissors") return "You win! Rock beats Scissors";
        }
        if(playerChoice === "paper"){
            if(computerSelection === "rock") return "You win! Paper beats Rock";
            if(computerSelection === "paper") return "Tie!";
            if(computerSelection === "scissors") return "You lose! Scissors beats Paper";
        }
        if(playerChoice === "scissors"){
            if(computerSelection === "rock") return "You lose! Rock beats Scissors";
            if(computerSelection === "paper") return "You win! Scissors beats Paper";
            if(computerSelection === "scissors") return "Tie!";
        }
}
function game(){
    let userScore = 0;
    let cpuScore = 0;
    let tieCount = 0;
    for(let i = 0; i < 5; i++){
        let roundResult = playRound(prompt("Enter your move.", "Rock, Paper, or Scissors"), getComputerChoice());
        console.log(roundResult);
        if(roundResult.includes("win")) userScore++;
        if(roundResult.includes("lose")) cpuScore++;
        if(roundResult.includes("Tie")) tieCount++;
        console.log("User Score: " + userScore);
        console.log("Cpu Score: " + cpuScore);
        console.log("Ties: " + tieCount);
    }
    if(userScore > cpuScore){
        console.log("Congratulations! You Win!");
    }else if(userScore < cpuScore){
        console.log("The computer wins!");
    }else{
        console.log("It's a tie game!");
    }
}