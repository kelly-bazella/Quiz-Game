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
function reset() {
    score = 100;
    iterator = 0;
    highScoreSection.innerHTML = "";
}
function loadQuestion(questionObj) {
    document.getElementById("question").innerText = questionObj.title
    for (var i = 0; i < questionObj.choices.length; i++) {
        document.getElementById(i).innerText = questionObj.choices[i];
    }
}
highScoreButton.addEventListener("click", function () {
    startSection.classList.add("hide");
    highScoreSection.classList.remove("hide");
    var keys = Object.keys(localStorage);
    for (var i = 0; i < keys.length; i++) {
        var user = keys[i];
        var endScore = localStorage.getItem(user);
        var userElement = document.createElement("div");
        var scoreElement = document.createElement("div");
        scoreElement.innerText = endScore
        userElement.innerText = user
        highScoreSection.appendChild(userElement);
        highScoreSection.appendChild(scoreElement);
    }
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
    reset();
})
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var highscoreInitials = document.querySelector(".initials-input").value;
    if (highscoreInitials === "") {
        alert("Error: You have to enter your initials!");
    } else {
        alert("Success! You have been added to the highscores list!");
        localStorage.setItem(highscoreInitials, score)
    }
})
document.querySelectorAll(".btn-block").forEach(function (element) {
    element.addEventListener("click", function (event) {
        console.log(event.target.innerText);
        if (event.target.innerText !== questions[iterator].answer) {
            score -= 10;
            timer.innerText = score;
        } else {
            console.log("correct")
        }
        iterator++;
        if (iterator < questions.length) {
            loadQuestion(questions[iterator]);
        }
        else {
            quizSection.classList.add("hide");
            resultSection.classList.remove("hide");
            clearInterval(timeInterval);
        }
    })
})
