

//variables
var startBtn = document.querySelector("#startBtn");
var hideStartPage = document.querySelector("#startPage");
var question1 = document.querySelector(".question1");
var questionSection = document.querySelector(".questionSection")
var question =  document.querySelector(".question")
var answer1 = document.querySelector(".answer1")
var answer2 =  document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 =  document.querySelector(".answer4")
var highscorePage = document.querySelector("#highscorePage")
var allDonePage = document.querySelector("#allDonePage")
var highscoresLink = document.querySelector("#highscoresLink")
var goBack = document.querySelector("#goBack")
var clearHighscores = document.querySelector("#clearHighscores")
var submitBtn = document.querySelector("#submitBtn")
var timerInterval;
var arrayIndex = 0;
//add an event listener for clicking the answer button that takes you to the checkAnswer function
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)
//add event listener to clicking the view highscores link that takes you to the highscores function
highscoresLink.addEventListener("click", viewHighscores)
//add event listener for the "go back" button and the "clear highscores" button
goBack.addEventListener("click", backToStart)
clearHighscores.addEventListener("click", clearTheScores)
//add event listener for the submit button
submitBtn.addEventListener("click", submitScore)
//make sure the questions are hidden to begin
questionSection.style.display = "none"
//also hide the all done page and highscores page
highscorePage.style.display = "none"
allDonePage.style.display = "none"
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
    }, { //oh no. This causes issues when you go through the entire quiz and go back from the view highscores page...... 
        question: "This is a placeholder question.",
        answers: ["1","2","3","4"],
        correctAnswer: "1"
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
//when the timer runs out, it displays an out of time message and takes the user to the all done page
function outOfTime () {
    if(secondsLeft ===0) {
        clearInterval(timerInterval);
        timer.textContent = "Out of Time!";
        questionSection.style.display = "none"
        allDonePage.style.display = "initial" 
        highscorePage.style.display = "none"
        //user score equals 0
        score.textContent = secondsLeft + " is your final score."
    }
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
    if (arrayIndex === 5) {
        clearInterval(timerInterval);
        timer.textContent = secondsLeft+10 + " Good Job!";
        finalScore()
        questionSection.style.display = "none"
        allDonePage.style.display = "initial" 
    }
}

function finalScore() {
    var score = document.querySelector("#score")
    score.textContent = secondsLeft+10 + " is your final score."
}

function viewHighscores() {
    console.log("hi")
    hideStartPage.style.display = "none"
    highscorePage.style.display = "initial"
    questionSection.style.display = "none"
    allDonePage.style.display = "none"
}

function backToStart(){
    highscorePage.style.display = "none"
    hideStartPage.style.display = "initial"
}

function clearTheScores() {

}

function submitScore() {
    allDonePage.style.display = "none"
    highscorePage.style.display = "initial"
}

//when the correct answer is selected, the message "correct" displays and when the wrong answer is selected, the message "wrong" displays

//you can enter your initials in the all done page form and submit them to the highscores page

//clicking the button hides the all done page and takes you to the highscore page and your score is submitted

//the highscore page diplays the previous scores 

//the user can click a button that takes them back to the start quiz page or a button that clears the highscores
















