humanScore = 0
computerScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    index =  Math.floor(Math.random() * (choices.length))
    return choices[index]

}

function getHumanChoice() {
    let user_choice = prompt("rock, paper, scissors..?")
    user_choice = user_choice.toLowerCase()
    return user_choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        console.log("Tie! You both choose " + computerChoice)
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Human won! " + humanChoice + " beats " + computerChoice )
        humanScore +=1
        console.log("Human Score is " + humanScore)
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Human won! " + humanChoice + " beats " + computerChoice )
        humanScore +=1
        console.log("Human Score is " + humanScore)
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Human won! " + humanChoice + " beats " + computerChoice )
        humanScore +=1
        console.log("Human Score is " + humanScore)
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("Computer won!"  + computerChoice + " beats " + humanChoice)
        computerScore +=1
        console.log("Computer Score is " + computerScore)
    }
    if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("Computer won! " + computerChoice + " beats " + humanChoice)
        computerScore +=1
        console.log("Computer Score is " + computerScore)
    }
    if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("Computer won! " + computerChoice + " beats " + humanChoice )
        computerScore +=1
        console.log("Computer Score is " + computerScore)
    }
    
}





function playGame() {
    let i = 0;
    while(i < 5)  {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        i += 1
    }
    if (humanScore > computerScore) {
        console.log("Human won! with a " + humanScore + " for human and " + computerScore + " for computers")
    }
    if (humanScore < computerScore) {
        console.log("Computer won! with a " + computerScore + " for computer and " + humanScore + " for humans")
    }
}

playGame()