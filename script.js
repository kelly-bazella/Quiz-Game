//global variables
var startButton = document.getElementById("startButton");
var startSection = document.getElementById("start");
var quizSection = document.getElementById("quiz");
var resultSection = document.getElementById("results");
var timer = document.getElementById("timer");
var score = 100;
var timeInterval;
var iterator = 0;
var highScoreSection=document.getElementById("highscore-list");
var highScoreButton=document.getElementById("highscore-button");

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
    for(var i = 0; i<questionObj.choices.length; i++){
        document.getElementById(i).innerText=questionObj.choices[i];
    }
}

//click events
highScoreButton.addEventListener("click", function(){
    startSection.classList.add("hide");
    highScoreSection.classList.remove("hide");
})
startButton.addEventListener("click", function(){
    startSection.classList.add("hide")
    quizSection.classList.remove("hide")
    timeInterval=setInterval(scoreKeeper, 1000)
    loadQuestion(questions[iterator]);
})
document.querySelectorAll(".btn-block").forEach(function(element){
    //for question buttons
    element.addEventListener("click", function(event){
        console.log(event.target.value);
        iterator++;
        if (iterator<=4){
            loadQuestion(questions[iterator]);
        } else{
            quizSection.classList.add("hide");
            resultSection.classList.remove("hide");
        }
    })
})
//for each