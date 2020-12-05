const colorArray = ["aqua", "yellow", "blue", "black"];
const btn = document.getElementById('button');

button.onclick = () => {
    changeColor();
}

const changeColor = () => {
    let randNum = Math.floor(Math.random() * colorArray.length);
  
    document.body.style.backgroundColor = colorArray[randNum];
};



//how to get the numbers from randNum to not repeat so that its a different color every time
//you press the button?