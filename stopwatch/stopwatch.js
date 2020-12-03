//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {
    seconds++;
    //logic to dertmine when to incrememnt next value
    if (seconds === 60) {
        seconds = 0;
        minutes++
    }
    if (minutes === 60) {
        minutes = 0;
        hours++
    }
    //if seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10){
        displaySeconds = "0" + seconds
    } else {
        displaySeconds = seconds;
    }
    
    if (minutes < 10){
        displayMinutes = "0" + minutes
    } else {
        displayMinutes = minutes;
    }
    
    if (hours < 10){
        displayHours = "0" + hours
    } else {
        displayHours = Hours;
    }

    //Display updated time values to user
    document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStop() {
    if (status === "stopped"){
        //start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
};

//function to reset stopwatch
function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}

//notes:
/*
    What went into making this stopwatch?

    1. First thing we need to note is the HTML section. In the HTML
       section we created the seconds 00:00:00 for display. We then
       created the buttons. Start/Stop and Reset
       I did a little extra and added a title.buttons

    2. CSS was mainly to adjust the font size and centrally align the text so  
       that everything ended up at the center of the page.

    3. I had to link the CSS stylesheet and JavaScript pages to the HTML page.

    4. Next was JavaScript.
       I first started off by creating a counter for seconds, minutes and hour.
       I then created a function stopWatch(). The stopwatch functionality was
       to increment seconds, minutes and hours. The logic was a follows:

       seconds increments by 1 (seconds++)

       Once seconds reaches 60, seconds goes back to 0 and minutes increases by 1
       Once minutes reaches 60, minute goes back to 0 and hour increases by 1.
       All the while, as hour reaches 1 and minutes and seconds reach 60, seconds
       and minute reset together as hour reaches 1.

    5. In order to create 00:00:00 on the HTML page I created displaySeconds,
       displayMinutes and displayHours. For all three, using an IF statement
       I created conditions that if they are below 10s then they EQUAL
       the string "0" PLUS hours.toString(). The reason for the toString method
       is to convert the number 0 to a string 0. 
       On reflection however, I've noticed that you don't need to convert the
       seconds, minutes and hours to a string. The display for them will be the same.
       
    6. This was where I created the functionality for starting and stopping the 
       timer. First was to create a variable status and assign "stopped".
       Inside the function, I created conditions using IF saying that if
       the condition is "stopped", using the setInterval() function I would call
       the stopWatch function, and implement it every 1000ms, which EQUALS 1 second.

       The way to stop setInterval() was to first assign it to a variable interval
       and then using the clearInterval, use it to stop it, by declaring clearInterval
       with an argument of interval. This would then of course reset the innerHTML
       of the start button to Start and change the status back to "stopped".

    7. I then went into the HTML file and for the startStop button created an
    onclick event by invoking the startStop() function.

    8. The reset button followed the same logic as the stop button but it would
       also reset the innerHTML of seconds, minutes, and hours to 0. the display
       timer on the screen would revert back to 00:00:00 and the startStop button
       would display start. 

    9. I then assigned this function to an onclick event for the reset button
    on the HTML page. 

*/