/*//view highscores
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
}, false);*/

//variables
var main = document.getElementsByTagName('main')[0]
var viewHighscoreLink = document.getElementById('view_highscore_link')
var timeDisplay = document.getElementById('time_display')
var startQuizButton = document.getElementById('start_quiz_button')
var questionNumbersBox = document.getElementById('question_numbers_box')
var questionDisplay = document.getElementById('question_display')
var answersList = document.getElementById('answer_list')
var answerFeedback = document.getElementById('feedback')
var scoreDisplay = document.getElementById('score_display')
var initialsInput = document.getElementById('initials_input')
var submitInitialsButton = document.getElementById('submit_initials_button')
var highscoreList = document.getElementById('highscore_list')
var goToStartingPageButton = document.getElementById('go_to_starting_page_button')
var clearHighscoresButton = document.getElementById('clear_highscores_button')

//Questions and answers Array
const questions = [ 
    {
        "question": "Commonly used data types DO NOT include:",
        "answers": ["strings", "booleans", "alerts", "numbers"],
        "correct_index": 2
    }, {
        "question": "The condition in an if/ else statement is enclosed within ____.",
        "answers": ["quotes", "curly brackets", "parentheses", "square brackets"],
        "correct_index": 1
    }, {
        "question": "Arrays in JavaScript can be used to store ____.",
        "answers": ["numbers and strings", "other arrays", "booleans", "all of the above"],
        "correct_index": 3
    }
]



//need wrong and correct pop ups
    
     
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







