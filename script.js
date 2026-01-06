humanScore = 0
computerScore = 0
const WINNING_SCORE = 5;
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    index =  Math.floor(Math.random() * (choices.length))
    return choices[index]

}



function playRound(humanChoice, computerChoice) {
    let text = "";
    if (humanChoice == computerChoice){
        text += "Tie! You both choose " + computerChoice
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text}
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        text += "Human won! " + humanChoice + " beats " + computerChoice 
        humanScore +=1
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text}
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        text += "Human won! " + humanChoice + " beats " + computerChoice 
        humanScore +=1
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text}
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        text += "Human won! " + humanChoice + " beats " + computerChoice 
        humanScore +=1
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text}
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        text += "Computer won!"  + computerChoice + " beats " + humanChoice
        computerScore +=1
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text}
    }
    if (computerChoice == "scissors" && humanChoice == "paper") {
        text += "Computer won! " + computerChoice + " beats " + humanChoice
        computerScore +=1
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text}
        
    }
    if (computerChoice == "paper" && humanChoice == "rock") {
        text += "Computer won! " + computerChoice + " beats " + humanChoice 
        computerScore +=1
        return {
        "humanScore" : humanScore, "computerScore" : computerScore, "text" : text
    }    
    }
    
}

buttons = document.querySelectorAll("button");
console.log(buttons)

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
          return;
    }

        const div = document.querySelector("div");
        const p = document.querySelector("#message")
        const spanHumanScore = document.querySelector("#humanScore");
        const spanComputerScore = document.querySelector("#computerScore");
    
        
        const humanChoice = e.target.value;
        
        const round = playRound(humanChoice, getComputerChoice());
        
        spanHumanScore.textContent = round['humanScore'];
        spanComputerScore.textContent = round['computerScore'];
        p.textContent = round['text'];
        if (humanScore === WINNING_SCORE) {
            p.textContent += " — Game over! Human wins 🎉";
            buttons.forEach(b => b.disabled = true);
        } 
        else if (computerScore === WINNING_SCORE) {
            p.textContent += " — Game over! Computer wins 🤖";
            buttons.forEach(b => b.disabled = true);
        }

        div.appendChild(p);
    


    })    
    });
