
//global variables to keep track of scores
let humanScore, computerScore = 0;


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

//recusrive function to get human input and check for eronous inputs
const getHumanChoice = () => {
    let personInput = prompt("Please enter your choice of rock, paper or scissors: ");
    //recusion base condition
    if (personInput.toLowerCase() === "rock" || personInput.toLowerCase() === "paper" || personInput.toLowerCase() === "scissors") {
        return personInput;
    }
    return getHumanChoice();
}


