var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "2"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parenthese2"
    },
    {
        title: "",
        choices: [],
        answer: ""
    },
    {
        title: "",
        choices: [],
        answer: ""
    },
    {
        title: "",
        choices: [],
        answer: ""
    },
    {
        title: "",
        choices: [],
        answer: ""
    },
    {
        title: "",
        choices: [],
        answer: ""
    },
    {
        title: "",
        choices: [],
        answer: ""
    },
];
var button1 = document.querySelector("#button1");
var nextQuestion = 0;
var time;
var totalQuestions = questions.length;
var title1 = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionContainer = document.querySelector("#questioncontainer");
var startbutton = document.querySelector("#startbutton");


function start() {
    button1.addEventListener("click", startbuttonclick);
    var buttonArrays = document.querySelectorAll(".answerB");
    for (var i = 0; i < buttonArrays.length; i++) {
        buttonArrays[i].addEventListener("click", answerClick);
    }
}
function newQuestion() {
    
        title1.innerText = questions[nextQuestion].title;
        answer1.innerText = questions[nextQuestion].choices[0];
        answer2.innerText = questions[nextQuestion].choices[1];
        answer3.innerText = questions[nextQuestion].choices[2];
        answer4.innerText = questions[nextQuestion].choices[3];
    

}

function startbuttonclick() {
    questionContainer.classList.remove('hidden');
    startbutton.classList.add('hidden');
}
    function answerClick(event) {
        console.log(this);
        nextQuestion++;
        // var value = event
        // if (value !== questions.answer.value){
        //     alert("Incorrect");
        // } else{
        newQuestion();
    }



    start();
    






//   if answer correct move on to the next question
// otherwise deduct time and alert "incorrect -seconds"


// TIME INTERVAL
// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();