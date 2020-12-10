const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const display = document.getElementById('display');

let counter = 0;

decrease.onclick = () => {
    counter--;
    display.innerHTML = counter;
};

increase.onclick = () => {
    counter++;
    display.innerHTML = counter;
};

reset.onclick = () => {
    counter = 0;
    display.innerHTML = counter;
}
//I need to first decrement the counter. I then need to make it so that the display equals the counter
//I can use innerHTML to change that. number-display.innerHTML = counter.
//something like that

