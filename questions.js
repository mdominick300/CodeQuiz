var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "1"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "2"
    },
    {
        title: "Commonly used html tags DO NOT include:",
        choices: ["1. body", "2. div", "3. span", "4. code"],
        answer: "3"
    },
    {
        title: "Web development code that is often called the frame/structure of a webpage",
        choices: ["1. html", "2. hunter", "3. framework", "4. structure"],
        answer: "0"
    },
    {
        title: "Which is used to randomize using a loop?",
        choices: ["1. math.random", "2. random.it", "3.math.it", "4. random.math"],
        answer: "0"
    },
    {
        title: "What is the function that logs an event to the console?",
        choices: ["1. function(log)", "2. console.log()", "3. log(it)", "4. function.log()"],
        answer: "1"
    },
    {
        title: "Which is NOT a type of event listener?",
        choices: ["1. click", "2. mouseup", "3. highlight", "4. mousedown"],
        answer: "2"
    },
    {
        title: "What is NOT a way to set a variable?",
        choices: ["1. set", "2. var", "3. const", "4. let"],
        answer: "0"
    },

];

var button1 = document.querySelector("#button1");
var nextQuestion = -1;
var counter = 0;
var timeEl = 60;
var score = 100;
var totalQuestions = questions.length;
var title1 = document.querySelector(".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var questionContainer = document.querySelector("#questioncontainer");
var startbutton = document.querySelector("#startbutton");
// var retake = document.querySelector("#highscorecontainer");
var timerInterval;
var retake = document.querySelector("#retake1");
var highscoresContainer = document.querySelector("#highscorescontainer")


 
function start() {
    button1.addEventListener("click", startbuttonclick);
    var buttonArrays = document.querySelectorAll(".answerB");
    for (var i = 0; i < buttonArrays.length; i++) {
        buttonArrays[i].addEventListener("click", answerClick);  
    }
}

function retakeQuiz() {
    event.preventDefault();
}

function retakeButtonClick(){
    event.preventDefault();
    timeEl= 60;
    score= 100;
    nextQuestion= 0;
    counter= 1;
    title1.textContent = questions[0].title;
    answer1.textContent = questions[0].choices[0];
    answer2.textContent = questions[0].choices[1];
    answer3.textContent = questions[0].choices[2];
    answer4.textContent = questions[0].choices[3];

    questioncontainer.classList.remove('hidden');
    highscoresContainer.classList.add('hidden'); 
    init();
    setTime();
    nextQuestion();

  
}

function newQuestion() {
    
    nextQuestion++;
    title1.textContent = questions[nextQuestion].title;
    answer1.textContent = questions[nextQuestion].choices[0];
    answer2.textContent = questions[nextQuestion].choices[1];
    answer3.textContent = questions[nextQuestion].choices[2];
    answer4.textContent = questions[nextQuestion].choices[3];
    counter++;
    
    }


function startbuttonclick() {
    event.preventDefault();
    questioncontainer.classList.remove('hidden');
    startbutton.classList.add('hidden');
    newQuestion();
    setTime();
    

}

function highScores(){
    highscoresContainer.classList.remove('hidden');
    finishcontainer.classList.add('hidden');
    renderTodos();
    
}



function answerClick(event) {
    event.preventDefault();
    console.log(this.id);
    console.log(questions[nextQuestion].answer);
    if (questions[nextQuestion].answer !== this.id) {

        timeEl = timeEl - 3;
        score = score - 5;
        console.log(time);
        incorrect.textContent = "INCORRECT";

    } else {
        incorrect.textContent = "";
        if(counter !== questions.length){
            
    newQuestion();
    } else {
        done();
        clearInterval(timerInterval);
        console.log(timeEl);
    }
    }
}
start();



var time = document.querySelector("#time");

function setTime() {
        timerInterval = setInterval(function () {
        timeEl--;
        time.textContent = " TIME LEFT: " + timeEl;
        console.log(timeEl);
        if (timeEl <= 0) {
            score = score - 50;
            clearInterval(timerInterval);
            done();
        }
        if (timeEl < 10){
            time.style.fontSize = "50px";
            time.style.color ="red";

        }
    }, 1000);
}

function done() {
    questioncontainer.classList.add('hidden');
    finishcontainer.classList.remove('hidden');
    document.getElementById("endScore").textContent = score;
    init();
    console.log(score);


}

var scoreForm = document.querySelector("#score-form");
var scoreText = document.querySelector("#score-text");
var scoreList = document.querySelector("#score-list");
var scoreCountSpan = document.querySelector("#todo-count");

var todos = [];
var todo =  [];
var li ;
var ul ;
function renderTodos() {

    scoreList.innerHTML = "";
    var newList = document.createElement("ul");

    for (let i = 0; i < todos.length; i++) {
        var newItem = document.createElement("li");
        const scoreItem = todos[i];
        newItem.innerHTML = scoreItem.name + " " + scoreItem.value
        newList.appendChild(newItem);
    }

    scoreList.appendChild(newList)
  }

  var storedTodos= 0;
  var todoText = 0;
  var storedScore = 0;
  var storedText = 0;
  
  
  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("storedScore",JSON.stringify(score));
  }
  
  // When form is submitted...
  scoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    todoText = scoreText.value.trim();
    

  
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }

    var scoreObj = {
        name: todoText,
        value: score
    }
  
    // Add new todoText to todos array, clear the input
    todos.push(scoreObj);
    scoreText.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeTodos();
    highScores();
  });

  function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var scoreItems = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (scoreItems !== null) {
      todos = scoreItems;
    }
  
    // Render todos to the DOM
    renderTodos();
  }
  
  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  retake.addEventListener("click", retakeButtonClick);