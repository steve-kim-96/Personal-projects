//onclick function for player submitting button should call the target number function and the computer guess function and compare the numbers and announce the winner
//I require function for target number
//I require function for computer guess
//I require function to decide winner
//I require onclick function for the player button
//I need a condition that rejects all non numbers and any number greater than or equal to 9
//for the onclick function I need to make sure that the innerHTML for computerGuess and target number change

let targetNumber = document.getElementById('target');
let computerNumber = document.getElementById('computer');
let humanNumber = document.getElementById('human');
let submitButton = document.getElementById('submit');
let playerAnswer = document.getElementById('player-answer');
let winner = document.getElementById('winner-winner')
const targetGenerator = () => {
    return Math.floor(Math.random() * 10);
};

const computerGuess = () => {
    return Math.floor(Math.random() * 10);
};

const computer = computerGuess();
const target = targetGenerator();

const winnerAssign = () => {

console.log(computer - target);
console.log(playerAnswer);
};

submitButton.onclick = () => {
    targetNumber.innerHTML = `target number is ${target}`;
    computerNumber.innerHTML = `computer chose ${computer}`;
    winnerAssign();
}

