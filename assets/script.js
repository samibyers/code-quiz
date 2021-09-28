

//variables
var startBtn = document.querySelector("#startBtn");
//var viewHighscores = document.querySelector("#highscoresLink");
var hideStartPage = document.querySelector("#startPage");
var question1 = document.querySelector(".question1");
var questionSection = document.querySelector(".questionSection")
var question =  document.querySelector(".question")
var answer1 = document.querySelector(".answer1")
var answer2 =  document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 =  document.querySelector(".answer4")
var timerInterval;
var arrayIndex = 0;
//add an event listener for clicking the answer button that takes you to the checkAnswer function
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)
//make sure the questions are hidden to begin
questionSection.style.display = "none"
//an array of all the questions and answers and correct answers
const allQuestions = [ 
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    }, {
        question: "The condition in an if/ else statement is enclosed within ____.",
        answers: ["quotes", "curly brackets", "parentheses", 
        "square brackets"],
        correctAnswer: "parentheses"
    }, {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    }, {
        question: "The first index of an array is ____.",
        answers: ["always 0", "always 1", "always null", "always 42"],
        correctAnswer: "always 0" 
    }, {
        question: "What are boolean data type values?",
        answers: ["1 and 2", "yes and no", "true and false", "right and wrong"],
        correctAnswer: "yes and no"
    }
]
//timer 
var timer = document.querySelector("#time");
var secondsLeft = 60;

function quizTimer() {
    timerInterval = setInterval(function() {
     secondsLeft--;
     timer.textContent = "Time: " + secondsLeft;
     
     if(secondsLeft ===0) {
         clearInterval(timerInterval);
         outOfTime();
     }
    }, 1000);
}
//clicking the "start quiz" button hides the start page
startBtn.onclick = function(){
    console.log("start quiz")
    hideStartPage.style.display = "none"
    //the click also brings you to the first question page
    questionSection.style.display = "initial"
    renderQuestions();
    //starts the timer when the start button is clicked
    quizTimer();
    }
//this function takes the questions from the allQuestions array and displays them on the page
function renderQuestions() {
    question.textContent = allQuestions[arrayIndex].question
    answer1.textContent = allQuestions[arrayIndex].answers[0]
    answer2.textContent = allQuestions[arrayIndex].answers[1]
    answer3.textContent = allQuestions[arrayIndex].answers[2]
    answer4.textContent = allQuestions[arrayIndex].answers[3]

}
//when the timer runs out, it displays an out of time message
function outOfTime () {
 timer.textContent = "You Lose!";

}
//this function checks whether you clicked on the right answer and takes you to the next question. if the timer runs out, it displays you lose
function checkAnswer(event) {
    console.log(event.target.textContent)
    if (allQuestions[arrayIndex].correctAnswer == event.target.textContent){
    console.log("correct!")
    arrayIndex++
    renderQuestions()
    } else {
        console.log("wrong")
        secondsLeft = secondsLeft-10
        arrayIndex++
        renderQuestions()
    }
    if(secondsLeft ===0) {
        clearInterval(timerInterval);
        outOfTime();
    }
}






//display "Corrrect!"
       

//when you click on the correct answer, you are taken to the next question //you also get a "correct!" message

//if you click on any of the wrong answers, you get a "wrong!" message and you are returned to make another choice //you also lose 10 seconds from the timer


//Questions and answers Array... don't know if i can figure out how to use this...










