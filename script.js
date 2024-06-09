
//global variables to keep track of scores
let humanScore, computerScore;
humanScore = 0;
computerScore = 0;


//query selector to get an instance of all 3 buttons
const buttons = document.querySelectorAll('button');
//iterate through the buttons NodeList and assign an onclick listener to button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice());
    })
});

//query selector to get instance of left and right arms
const leftArm = document.querySelector('#left-arm');
const rightArm = document.querySelector('#right-arm');


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

//function that takes humanChoice and getComputerChoice values as arguments and increments global variables depending on winner and outputs win/lose/tie message
const playRound = (humanChoice, computerChoice) => {
    //lowercasing all values
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    //testing
    console.log(`Player chose ${humanChoice}`);
    console.log(`AI chose ${computerChoice}`);

    

    //conditionals for all possible outcomes
    if (humanChoice === "rock") {
        //changing the imgs for left and right arms
        rightArm.src = "./images/humanRock.svg";
        //lose condition
        if (computerChoice === "paper") {
            leftArm.src = "./images/aiPaper.svg"
            console.log("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            computerScore++;
        }
        //win condition
        else if (computerChoice === "scissors") {
            leftArm.src = "./images/aiScissors.svg"
            console.log("You win! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " loses to " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            humanScore++;
        }
        //tie condition
        else {
            leftArm.src = "./images/aiRock.svg"
            console.log("Tie!");
        }
    }
    else if (humanChoice === "paper") {
        rightArm.src = "./images/humanPaper.svg";
        //lose condition
        if (computerChoice === "scissors") {
            leftArm.src = "./images/aiScissors.svg"
            console.log("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            computerScore++;
        }
        //win condition
        else if (computerChoice === "rock") {
            leftArm.src = "./images/aiRock.svg"
            console.log("You win! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " loses to " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            humanScore++;
        }
        //tie condition
        else {
            leftArm.src = "./images/aiPaper.svg"
            console.log("Tie!");
        } 
    }
    else if (humanChoice === "scissors") {
        rightArm.src = "./images/humanScissors.svg";
        //lose condition
        if (computerChoice === "rock") {
            leftArm.src = "./images/aiRock.svg"
            console.log("You lose! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            computerScore++;
        }
        //win condition
        else if (computerChoice === "paper") {
            leftArm.src = "./images/aiPaper.svg"
            console.log("You win! " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " loses to " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
            humanScore++;
        }
        //tie condition
        else {
            leftArm.src = "./images/aiScissors.svg"
            console.log("Tie!");
        } 
    }
    //at round end display the updated score
    //query select the player-score and ai-score elements 
    const aiScore = document.querySelector("#ai-score");
    const playerScore = document.querySelector("#player-score");
    //updating the score h1 elements
    aiScore.textContent = computerScore;
    playerScore.textContent = humanScore;
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

