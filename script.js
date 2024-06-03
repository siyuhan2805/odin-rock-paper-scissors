
//global variables to keep track of scores
let humanScore, computerScore;
humanScore = 0;
computerScore = 0;


//function returns a reandom string value of "rock", "paper" or "scissors" based on the number generated
const getComputerChoice = () => {
    //random number generator between 1 (inclusive) and 9 (inclusive)
    let num = Math.floor(Math.random() * (10 - 1)) + 1;
    
    //conditionals depending on the number generated 
    //rock paper or scissors each have a 1/3 chance of being generated, so no bias
    if (num >= 1 && num <= 3) {
        return "rock";
    }
    else if (num >= 4 && num <= 6) {
        return "paper";
    }
    else if (num >= 7 && num <= 9) {
        return "scissors";
    }
}

//recursive function to get human input and check for eronous inputs
const getHumanChoice = () => {
    let personInput = prompt("Please enter your choice of rock, paper or scissors: ");
    //recusion base condition
    if (personInput.toLowerCase() === "rock" || personInput.toLowerCase() === "paper" || personInput.toLowerCase() === "scissors") {
        return personInput;
    }
    return getHumanChoice();
}

//function that takes humanChoice and getComputerChoice values as arguments and increments global variables depending on winner and outputs win/lose/tie message
const playRound = (humanChoice, computerChoice) => {
    //lowercasing all values
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    //conditionals for all possible outcomes
    if (humanChoice === "rock") {
        //lose condition
        if (computerChoice === "paper") {
            console.log("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            computerScore++;
        }
        //win condition
        else if (computerChoice === "scissors") {
            console.log("You win! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " loses to " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            humanScore++;
        }
        //tie condition
        else {
            console.log("Tie!");
        }
    }
    else if (humanChoice === "paper") {
        //lose condition
        if (computerChoice === "scissors") {
            console.log("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            computerScore++;
        }
        //win condition
        else if (computerChoice === "rock") {
            console.log("You win! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " loses to " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            humanScore++;
        }
        //tie condition
        else {
            console.log("Tie!");
        } 
    }
    else if (humanChoice === "scissors") {
        //lose condition
        if (computerChoice === "rock") {
            console.log("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            computerScore++;
        }
        //win condition
        else if (computerChoice === "paper") {
            console.log("You win! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " loses to " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            humanScore++;
        }
        //tie condition
        else {
            console.log("Tie!");
        } 
    }
} 

//function to keep track of scores over 5 rounds of game and declare a winner
const playGame = () => {
    //calls playRound function 5 times
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(humanScore);
        console.log(computerScore);
    }

    //determine winner by passing global variables into determineWinner function
    determineWinner(humanScore, computerScore);

}

//function to determine winner based on the humanScore and computerScore arguments
const determineWinner = (humanScore, computerScore) => {
    if (humanScore > computerScore) {
        console.log("The human wins!");
    }
    else if (computerScore > humanScore) {
        console.log("The machine wins!")
    }
    else {
        console.log("It's a tie!");
    }
}

//function call to run the game
playGame();