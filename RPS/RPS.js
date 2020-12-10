const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const winner = document.getElementById('winner');



const computerChoice = () => {
    //computerChoice is only returning rock...?
    //it was an issue of scope?
    //ahhhhhh because 
    const randomIndex = Math.floor(Math.random() * 3);
    
    if (randomIndex === 0) {
        return 'rock';
    } else if (randomIndex === 1){
        return 'paper';
    } else if (randomIndex === 2){
        return 'scissors';
    };
};





rock.onclick = () => {
    compChoice = computerChoice();
    if (compChoice === 'rock'){
        winner.innerHTML = 'You drew! Try again!!';
    }
    else if (compChoice === 'scissors'){
        winner.innerHTML = 'You won!';
    } else {
        winner.innerHTML = 'You lose...';
    }
};

paper.onclick = () => {
    compChoice = computerChoice();
    if (compChoice === 'paper'){
        winner.innerHTML = 'You drew! Try again!!';
    }
    else if (compChoice === 'rock'){
        winner.innerHTML = 'You won!';
    } else {
        winner.innerHTML = 'You lose...';
    }
};

scissors.onclick = () => {
    compChoice = computerChoice();
    if (compChoice === 'scissors'){
        winner.innerHTML = 'You drew! Try again!!';
    }
    else if (compChoice === 'paper'){
        winner.innerHTML = 'You won!';
    } else {
        winner.innerHTML = 'You lose...';
    } 
};


// I need to make the buttons clickable
// I need to create a function that generates a random number
// Is it easier to create an array and Math.Random the length or just generate a number between 0 and 3?
// I need to assign the numbers to either ROCK, PAPER, or SCISSORS.
// To assign the winner I need to put in conditions using IF or SWITCH statement 
// Can I do onclick functions for each button and put in win conditions for individual??? 
// something wrong with the logic... the winner assign isn't working properly.
// maybe I make the logic inside each of the onclick functions