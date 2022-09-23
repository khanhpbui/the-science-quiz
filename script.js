var finalScore = 0;
var secondsLeft = 55;
var counter = 0;
var questions = [
    {
        question: 'JavaScript File Has An Extension of:',
        optionA: 'A. .java',
        optionB: 'B. .js',
        optionC: 'C. javascript',
        optionD: 'D. .xml',
        correctAns: 'B'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        optionA: 'A. <js>',
        optionB: 'B. <javascript>',
        optionC: 'C. <script>',
        optionD: 'D. <scripting>',
        correctAns: 'C'
    },
    {
        question: 'Which Of The Dialog Box Display a Message And a Data Entry Field?',
        optionA: 'A. Alert()',
        optionB: 'B. Prompt()',
        optionC: 'C. Confirm()',
        optionD: 'D. Msg()',
        correctAns: 'B'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        optionA: 'A. msg("Hello World")',
        optionB: 'B. msgBox("Hello World")',
        optionC: 'C. alert("Hello World")',
        optionD: 'D. alertBox("Hello World")',
        correctAns: 'C'
    },
    {
        question: 'How do you call a function named "myFunction"?',
        optionA: 'A. call myFunction()',
        optionB: 'B. call function myFunction()',
        optionC: 'C. myFunction',
        optionD: 'D. myFunction()',
        correctAns: 'D'
    },
];

console.log(questions[counter]);
var viewScoreBtnEl = document.querySelector('#view-score');
var timeEl = document.querySelector('#time-el');

var startBtnEl = document.querySelector('#start-btn');
var questionEl = document.querySelector('#question');
var optA = document.querySelector('#a');
var optB = document.querySelector('#b');
var optC = document.querySelector('#c');
var optD = document.querySelector('#d');
var options = document.querySelectorAll('.option');
var answerEl = document.querySelector('#answer');
var allDone = document.querySelector('#all-done');
var quizScore = document.querySelector('#score');

function startQuiz() {
    startBtnEl.textContent = 'Start Quiz';
    startBtnEl.addEventListener('click', timer);
    displayQuestion();
};

startQuiz();


function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        startBtnEl.textContent = '';
        // if (answerEl === "Incorrect!") {
        //     ;
        //     timeLeft();
        // }
        if (secondsLeft > 0) {
            timeLeft();
        } else if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        } else {
            timeEl.textContent = '';
        }
    }, 1000);
};
//creat function for incorrect answer?
function timeLeft() {
    timeEl.textContent = 'Time: ' + secondsLeft + " second(s) left.";
};

function sendMessage() {
    timeEl.textContent = '';
    allDone.textContent = 'ALL DONE!!!';
    var questContainer = document.querySelector('#question-container');
    questContainer.setAttribute('style', 'display: none');
    var scoreContainer = document.querySelector('#score-container');
    scoreContainer.setAttribute('style', 'display: block');
    //add textContent with finalScore later. each correct answer is 20%
    //add form to input initials.createElement form
};


function displayQuestion() {
    // create questions
        questionEl.textContent = questions[counter].question;
        optA.textContent = questions[counter].optionA;
        optB.textContent = questions[counter].optionB;
        optC.textContent = questions[counter].optionC;
        optD.textContent = questions[counter].optionD;

        //forEach for each of the answer, then add if else statement
    };


function getValue(selectedBtn) {

    var selectedOptVal = selectedBtn
    var correctAnsVal = questions[counter].correctAns;

    console.log(typeof selectedOptVal)

    if (selectedOptVal === correctAnsVal) {
        answerEl.textContent = 'Correct!';
        finalScore += 20;
    } else {
        answerEl.textContent = 'Incorrect!';
        secondsLeft = secondsLeft - 15;
        timer();
        
    }
    counter++;
    // 
    displayQuestion();
    console.log(finalScore);
};






//view highscore
// viewScoreBtnEl.addEventListener('click', //need a funct for view highscore);


 //local storage
//  var quizTaker = {
//     quiztaker:
//     score:
//  }
//  localStorage.setItem('highscores', finalScore);