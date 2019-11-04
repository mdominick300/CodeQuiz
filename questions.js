var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
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

  var time;
  var totalQuestions= questions.length;
  var title1 = document.querySelector(".question");
  var answer1 = document.querySelector(".answer1");
  var answer2 = document.querySelector(".answer2");
  var answer3 = document.querySelector(".answer3");
  var answer4 = document.querySelector(".answer4");
  var questionContainer = document.querySelector("#questioncontainer");
  var startbutton = document.querySelector("#startbutton");
  

function start(){
    button1.addEventListener("click", startbuttonclick);
    var buttonArrays = document.querySelectorAll(".answerB");
    for (var i =0; i < buttonArrays.length-1; i++ ){
        buttonArrays[i].addEventListener("click", answerClick);
    }
}
  function newQuestion(){
     for (var i =0; i < questions.length-1; i++ ){
             title1.innerText = questions[i].title;
            answer1.innerText = questions[i].choices[0];
             answer2.innerText = questions[i].choices[1];
             answer3.innerText = questions[i].choices[2];
             answer4.innerText = questions[i].choices[3];
             }
         if (choices !== answer) {
            alert="Incorrect";
            time = time - 3;
         }

        //  question.addEventListener("submit", function(event) {}
        }


function startbuttonclick(){
    questionContainer.classList.remove('hidden');
    startbutton.classList.add('hidden');
}
function answerClick(){
 console.log()
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