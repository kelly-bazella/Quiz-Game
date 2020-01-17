//global variables
var startButton = document.getElementById("startButton");
var startSection = document.getElementById("start");
var quizSection = document.getElementById("quiz");
var resultSection = document.getElementById("results");
var timer = document.getElementById("timer");
var highScoreSection = document.getElementById("highscore-list");
var highScoreButton = document.getElementById("highscore-button");
var finalScore = document.getElementById("final-score");
var goBackButton = document.getElementById("go-back");
var submitButton = document.getElementById("submit-button");
var initialsInput = document.querySelector("#initial-input")
var optionOne = document.getElementById("0");
var optionTwo = document.getElementById("1");
var optionThree = document.getElementById("2");
var optionFour = document.getElementById("3");
var score = 100;
var timeInterval;
var iterator = 0;

function scoreKeeper() {
    score--;
    timer.innerText = score;
    if (score <= 0) {
        clearInterval(timeInterval);
        quizSection.classList.add("hide");
        resultSection.classList.remove("hide");
    }
}
//questionObj is one of the question in array
function loadQuestion(questionObj) {
    document.getElementById("question").innerText = questionObj.title
    for (var i = 0; i < questionObj.choices.length; i++) {
        document.getElementById(i).innerText = questionObj.choices[i];
    }
}
function stopTimer() {

}
//click events
highScoreButton.addEventListener("click", function () {
    startSection.classList.add("hide");
    highScoreSection.classList.remove("hide");
})
startButton.addEventListener("click", function () {
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");
    timeInterval = setInterval(scoreKeeper, 1000);
    loadQuestion(questions[iterator]);
})
goBackButton.addEventListener("click", function () {
    startSection.classList.remove("hide");
    resultSection.classList.add("hide");
})
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var user = { initials: initialsInput.value.trim() }
    if (user.initials === "") {
        console.log(initialsInput)
        alert("Error: You have to enter your initials!");
    } else { alert("Success! You have been added to the highscores list!") }
})

//stop timer after last question or stop quiz when time runs out, store that time number, print number as score

document.querySelectorAll(".btn-block").forEach(function (element) {
    element.addEventListener("click", function (event) {
        // console.log(event.target.innerText);
        iterator++;
        if (iterator <= 4) {
            loadQuestion(questions[iterator]);
        }
        else {
            quizSection.classList.add("hide");
            resultSection.classList.remove("hide");
            clearInterval(timeInterval);
        }
    })
})

optionOne.addEventListener("click", function () {
    if (optionOne.innerText !== questions[iterator].answer) {
        score -= 10;
    } else {
        console.log("correct")
    }
})
optionTwo.addEventListener("click", function () {
    if (optionTwo.innerText !== questions[iterator].answer) {
        score -= 10;
        console.log(optionOne.innerText)
    } else {
        console.log("correct")
    }
})
optionThree.addEventListener("click", function () {
    if (optionThree.innerText !== questions[iterator].answer) {
        score -= 10;
        console.log(optionOne.innerText)
    } else {
        console.log("correct")
    }
})
optionFour.addEventListener("click", function () {
    if (optionFour.innerText !== questions[iterator].answer) {
        score -= 10;
        console.log(optionOne.innerText)
    } else {
        console.log("correct")
    }
})




