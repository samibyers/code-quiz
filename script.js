//view highscores
//make into link
//link takes you to a page that stores highscore history

//timer
var timer = document.querySelector(".time");
var secondsLeft = 60;

function quizTimer() {
    var timerInterval = setInterval(function() {
     secondsLeft--;
     timer.textContent = "Time: " + secondsLeft;
     
     if(secondsLeft ===0) {
         clearInterval(timerInterval);
         sendMessage();
     }
    }, 1000);
}

function sendMessage () {
 timer.textContent = "You Lose!";

}
quizTimer();


//Coding Quiz Challenge 
//Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!
//button (Start Quiz)

//dynamically add title to starting page
var title = document.querySelector(".title");
title.textContent = "Coding Quiz Challenge";
title.className = "title";
console.log(title);

//dynamically add instructions to starting page
var instructions = document.querySelector(".instructions");
instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!";
instructions.className = "instructions";
console.log(instructions);


//dynamically added start button (borrowed from the interweb)
document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Start Quiz";
    button.className = "startBtn";
 
    button.onclick = function() {
        console.log("start quiz")
    };
 
    var startBtn = document.getElementById('startBtn');
    startBtn.appendChild(button);
}, false);

//Commonly used data types DO NOT include:
//choices: strings, booleans, alerts(T), numbers
//Correct! with upper border or Wrong!
var q1 = document.querySelector(".q1");
q1.textContent = "Commonly used data types DO NOT include:";
q1.className = "q1";
console.log(q1);

var strings = false
var booleans = false
var alerts = true
var numbers = false
//or maybe make an array with buttons??
var choices = ["stringsBtn", "booleansBtn", "alertsBtn", "numbersBtn"]
if (choices[2]) {
    console.log("Correct!")
} else {
    console.log ("Wrong!")
}

//The condition in an if/ else statement is enclosed within ____.
//choices: quotes, curly brackets(T), parentheses, square brackets 
//Correct! with upper border or Wrong!
var q2 = document.querySelector(".q2");
q2.textContent = "The condition in an if/ else statement is enclosed within ____.";
q2.className = "q2";
console.log(q2);

var quotes = false
var curlyBrackets = true
var parentheses = false
var squareBrackets = false
//maybe make it into a fuction
var q3 = function () {
    if (curlyBrackets) {
    console.log("Correct!")
} else {
    console.log("Wrong!")
}
}


//Arrays in JavaScript can be used to store ____.
//choices: numbers and strings, other arrays, booleans, all of the above(T)
//Correct! with upper border or Wrong!
var q3 = document.querySelector(".q3");
q3.textContent = "Arrays in JavaScript can be used to store ____.";
q3.className = "q3";
console.log(q3);

var numbersAndStrings = false
var otherArrays = false
var booleans = false
var allOfTheAbove = true
if (allOfTheAbove) {
    console.log("Correct!")
} else {
    console.log("Wrong!")
}
    
    
    
//All done!
//Your final score is (score) = to number of seconds
//enter initials (form), button: Submit

/*let btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);*/

//Highscores 
//scores are displayed and saved
// button: Go Back, button: clear highscores







