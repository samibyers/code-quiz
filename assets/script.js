//variables
var startBtn = document.querySelector("#startBtn");
//var viewHighscores = document.querySelector("#highscoresLink");
var hideStartPage = document.querySelector("#startPage");
var question1 = document.querySelector(".question1");
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");

//make sure the questions are hidden to begin
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";

//timer
var timer = document.querySelector("#time");
var secondsLeft = 60;

function quizTimer() {
    var timerInterval = setInterval(function() {
     secondsLeft--;
     timer.textContent = "Time: " + secondsLeft;
     
     if(secondsLeft ===0) {
         clearInterval(timerInterval);
         outOfTime();
     }
    }, 1000);
}

function outOfTime () {
 timer.textContent = "You Lose!";

}
quizTimer();

//clicking the "start quiz" button hides the start page
startBtn.onclick = function(){
console.log("start quiz")
hideStartPage.style.display = "none"
//the click also brings you to the first question page
question1.style.display = "initial"
}

//when you click on the correct answer, you are taken to the next question //you also get a "correct!" message

//if you click on any of the wrong answers, you get a "wrong!" message and you are returned to make another choice //you also lose 10 seconds from the timer


//Questions and answers Array... don't know if i can figure out how to use this...
/*
const Allquestions = [ 
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctIndex: 2
    }, {
        question: "The condition in an if/ else statement is enclosed within ____.",
        answers: ["quotes", "curly brackets", "parentheses", 
        'square brackets"],
        correctIndex: 1
    }, {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctIndex: 3
    }
]
*/







