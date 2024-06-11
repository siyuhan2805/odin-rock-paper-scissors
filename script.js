
//global variables to keep track of scores
let humanScore, computerScore;
humanScore = 0;
computerScore = 0;
//global variables to clone button nodes
let btnNodes;

//query selector get get an instance of the btn container 
const btnContainer = document.querySelector(".btn-container");
//query selector to get an instance of all 3 buttons
const buttons = document.querySelectorAll('button');
//query selector to get instance of left and right arms
const leftArm = document.querySelector('#left-arm');
const rightArm = document.querySelector('#right-arm');
//add event listener for animation end on both arms
leftArm.addEventListener("animationend", () => {
    leftArm.style.animation = "";
})
rightArm.addEventListener("animationend", () => {
    rightArm.style.animation = "";
})


//iterate through the buttons NodeList and assign an onclick listener to button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        setTimeout(() => {
            playRound(button.value, getComputerChoice());
            //reinstate the buttons after round is finished and score is not 5
            if (computerScore < 5 && humanScore < 5) {
                enableBtns(btnNodes);
            }
            
        }, 2000);
        //disable buttons
        disableBtns();
        //animation for 2 secs
        leftArm.style.animation = "shakeAi 2s ease";
        rightArm.style.animation = "shakePlayer 2s ease";
        //set the arm images src back to the default src 
        resetArms();
    });
    
});


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
    updateScore();
    //check for any winners
    determineWinner(humanScore, computerScore);
    
} 

//function to reset the images of the arms to the default images
const resetArms = () => {
    leftArm.src = "./images/ai_arm_idle.svg";
    rightArm.src = "./images/human_arm_idle.svg";
}

//function to update the score
const updateScore = () => {
    //query select the player-score and ai-score elements 
    const aiScore = document.querySelector("#ai-score");
    const playerScore = document.querySelector("#player-score");
    //updating the score h1 elements
    aiScore.textContent = computerScore;
    playerScore.textContent = humanScore;
}


//function to determine winner based on the humanScore and computerScore arguments
const determineWinner = (humanScore, computerScore) => {
    if (humanScore === 5) {
        console.log("The human wins!");
        //create a new element
        const element = document.createElement("h1");
        element.textContent = "You Win!";
        element.setAttribute("style", "font-size: 9.6rem; text-shadow: 4px 4px 0px #000; -webkit-text-stroke-width: .1rem;  -webkit-text-stroke-color: #000;");
        //replace the buttons with the outcome text
        btnContainer.appendChild(element);
        //create the button element to restart the game
        const btn = document.createElement("button");
        //create the img element to attach to the button
        const btnCover = document.createElement("img");
        btnCover.src = "./images/restartBtn.svg";
        btnContainer.setAttribute("style", "flex-direction: column; text-align: center; gap: 1.6rem;");
        //add image tag as a child to the button parent
        btn.appendChild(btnCover);
        //adding css attributes to btn
        btn.classList.add("btn");
        //add the button element as a child to the btn-container class
        btnContainer.appendChild(btn);
        //add restart logic
        btn.addEventListener("click", () => {
            location.reload();
        });

        //animate background image with the scale-in effect of winning colour
        //create a style element to add to the head
        const style = document.createElement("style");
        style.textContent = `
            body::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                background-color: #A4EE98;
                animation: scaleInWin 500ms ease 0s 1 normal forwards
            }
        `
        document.head.appendChild(style);
        
    }
    else if (computerScore === 5) {
        console.log("AI wins!");
        //create a new element
        const element = document.createElement("h1");
        element.textContent = "You Lose!";
        element.setAttribute("style", "font-size: 9.6rem; text-shadow: 4px 4px 0px #000; -webkit-text-stroke-width: .1rem;  -webkit-text-stroke-color: #000;");
        //replace button with the outcome text
        btnContainer.appendChild(element);
        //create the button element to restart the game
        const btn = document.createElement("button");
        //create the img element to attach to the button
        const btnCover = document.createElement("img");
        btnCover.src = "./images/restartBtn.svg";
        btnContainer.setAttribute("style", "flex-direction: column; text-align: center; gap: 1.6rem;");
        //add image tag as a child to the button parent
        btn.appendChild(btnCover);
        //adding css attributes to btn
        btn.classList.add("btn");
        //add restart logic to button
        btn.addEventListener("click", () => {
                location.reload();
        });
        //add the button element as a child to the btn-container class
        btnContainer.appendChild(btn);
        


        //animate background image with the scale-in effect of winning colour
        //create a style element to add to the head
        const style = document.createElement("style");
        style.textContent = `
            body::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                background-color: #FF9DE9;
                animation: scaleInWin 500ms ease 0s 1 normal forwards
            }
        `
        document.head.appendChild(style);
    }
}

//function to disable buttons when the animation is running 
const disableBtns = () => {
    //clone a list of all children nodes
    btnNodes = document.querySelectorAll("button");
    buttons.forEach((button) => {
        //remove the btns children from the parent
        btnContainer.removeChild(button);
    });
}

//function to enable buttons when animation is finished 
const enableBtns = (nodes) => {
    //append the nodes back to the parent node
    nodes.forEach((node) => {
        btnContainer.appendChild(node);
    });
}




