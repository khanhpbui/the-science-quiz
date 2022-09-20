var finalScore = "";
var secondsLeft = 100;

var viewScoreBtnEl = document.querySelector('#view-score');//button
var timeEl = document.querySelector('#time-el');

var startBtnEl = document.querySelector('#start-btn');
var questionEl = document.querySelector('#question');
var optA = document.querySelector('#a');
var optB = document.querySelector('#b');
var optC = document.querySelector('#c');
var optD = document.querySelector('#d');
var answerEl = document.querySelector('#answer');
var finalScore = document.querySelector('#score');
var allDone = document.querySelector('#all-done');


function timeLeft(){
    timeEl.textContent = 'Time: ' + secondsLeft +" second(s) left.";
};

function timer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeLeft();
        // if (answerEl === "Incorrect!") {
        //     secondsLeft = secondsLeft - 15;
        //     timeLeft();
        // }
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
};

startBtnEl.addEventListener('click', timer)

function sendMessage() {
    timeEl.textContent = '';
    allDone.textContent = 'ALL DONE!!!';
    //add textContent with finalScore later. each correct answer is 20%
    //add form to input initials.createElement form
}



//view highscore
// viewScoreBtnEl.addEventListener('click', //need a funct for view highscore);

// create questions
let question = '';
