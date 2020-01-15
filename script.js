//global variables
var startButton = document.getElementById("startButton");
var startSection = document.getElementById("start");
var quizSection = document.getElementById("quiz");
var resultSection = document.getElementById("results");
var timer = document.getElementById("timer");
var highScoreSection=document.getElementById("highscore-list");
var highScoreButton=document.getElementById("highscore-button");
var goBackButton = document.getElementById("go-back");
var submitButton= document.getElementById("submit-button");
var initialsInput = document.querySelector("#initial-input")
var score = 100;
var timeInterval;
var iterator = 0;

//functions
function scoreKeeper (){
    score--;
    timer.innerText=score;
    if(score<=0){
        //stops the timer
        clearInterval(timeInterval);
    }
}
//questionObj is one of question in array
function loadQuestion(questionObj){
    document.getElementById("question").innerText=questionObj.title
    for(var i = 0;i<questionObj.choices.length; i++){
        document.getElementById(i).innerText=questionObj.choices[i];
    }
}

//click events
highScoreButton.addEventListener("click", function(){
    startSection.classList.add("hide");
    highScoreSection.classList.remove("hide");
})
startButton.addEventListener("click", function(){
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");
    timeInterval=setInterval(scoreKeeper, 1000)
    loadQuestion(questions[iterator]);
})
goBackButton.addEventListener("click", function(){
    startSection.classList.remove("hide");
    resultSection.classList.add("hide");
})
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var user = {initials: initialsInput.value.trim()}
    if(user.initials===""){
        alert("Error: You have to enter your initials!");
    }else{alert("Success! You have been added to the highscores list!")}
})
// check if question right

// if wrong, decrement time by 10 seconds

//if time runs out or user answer all questions

//stop timer after last question, store that time number, print number as score

document.querySelectorAll(".btn-block").forEach(function(element){
    element.addEventListener("click", function(event){
        // console.log(event.target.innerText);
        if(event.target.innerText===questions[i].answer){
            alert("Correct!!");
        }
        else if(event.target.innerText!==questions[i].answer){
            alert("WRONG!!!");
        }
        iterator++;
        if (iterator<=4){
            loadQuestion(questions[iterator]);
        } else{
            quizSection.classList.add("hide");
            resultSection.classList.remove("hide");
        }
    })
})
