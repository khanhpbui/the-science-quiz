var finalScore = 0;
var secondsLeft = 50;
var counter = 0;
var viewScoreBtnEl = document.querySelector('#view-score');
var timeEl = document.querySelector('#time-el');
var startBtnEl = document.querySelector('#start-btn');
var questionEl = document.querySelector('#question');
var optA = document.querySelector('#a');
var optB = document.querySelector('#b');
var optC = document.querySelector('#c');
var optD = document.querySelector('#d');
var answerEl = document.querySelector('#answer');
var allDone = document.querySelector('#all-done');
var finalScoreEl = document.querySelector('#score');
var questContainer = document.querySelector('#question-container');
var scoreContainer = document.querySelector('#score-container');
var nameVal = document.querySelector('#name');
var highScoreList = document.querySelector('#high-score');
var scoreRecords = [];

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
function startQuiz() {
    startBtnEl.textContent = 'Start Quiz';
    startBtnEl.addEventListener('click', timer);
    displayQuestion();
};

startQuiz();

function timer() {
    var timerInterval = setInterval(function () {
        //startBtnEl.setAttribute('style', 'display : none')
        questContainer.setAttribute('style', 'display: block');
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = 'Time: ' + secondsLeft + " second(s) left.";
        } else {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
};
function sendMessage() {
    timeEl.textContent = '';
    allDone.textContent = 'ALL DONE!!!';
    questContainer.setAttribute('style', 'display: none');
    scoreContainer.setAttribute('style', 'display: block');
    finalScoreEl.textContent = 'Your final score is: ' + finalScore;
};
function displayQuestion() {
    optA.disabled = false;
    optB.disabled = false;
    optC.disabled = false;
    optD.disabled = false;
    questionEl.textContent = questions[counter].question;
    optA.textContent = questions[counter].optionA;
    optB.textContent = questions[counter].optionB;
    optC.textContent = questions[counter].optionC;
    optD.textContent = questions[counter].optionD;
};
function getValue(selectedBtn) {
    optA.disabled = true;
    optB.disabled = true;
    optC.disabled = true;
    optD.disabled = true;
    var selectedOptVal = selectedBtn;
    var correctAnsVal = questions[counter].correctAns;
    if (selectedOptVal === correctAnsVal) {
        finalScore += 20;
        answerEl.textContent = 'Correct!';
    } else {
        answerEl.textContent = 'Incorrect!';
        secondsLeft = secondsLeft - 15;
    };
    if (counter < (questions.length - 1)) {
        setTimeout(clearComment, 2000);
        counter++;
        setTimeout(displayQuestion, 2000);
    } else {
        secondsLeft = 0;
    };
};
function clearComment() {
    answerEl.textContent = '';
};









console.log(scoreRecords);

function submitRecord(event) {
    event.preventDefault()
    var currentScore = [nameVal.value, finalScore];
    if (nameVal.value === '') {
        alert('Please enter your name.')
        return;
    };
    scoreRecords.push(currentScore);
    storeScores();
    renderScores();
};

function storeScores() {
    localStorage.setItem('score', JSON.stringify(scoreRecords));
};

function init() {
    var storedScores = JSON.parse(localStorage.getItem('score'));
    if (storedScores !== null) {
        scoreRecords = storedScores;// highscore not made out of init()
        console.log(scoreRecords)
        renderScores();
    };
};



function renderScores() {
    var sortedScores = scoreRecords.sort((a, b) => b[1] - a[1]);
    scoreContainer.setAttribute('style', 'display : none')
    //startBtnEl.setAttribute('style', 'display : none')
    questContainer.setAttribute('style', 'display : none')
    for (var i = 0; i < sortedScores.length; i++) {
        var score = sortedScores[i];
        var li = document.createElement('li');
        li.textContent = score[0] + '  ---  ' + score[1];
        console.log(score)
        highScoreList.append(li)
    }
};


// function init() {
//     var storedScores = localStorage.getItem('score');
//     console.log(typeof storedScores)
//     highScores.push(storedScores);
// }
// init();

// function submitRecord(event) {
//     event.preventDefault()
//     var currentScore = nameVal.value + ' : ' + finalScore;
//     if (nameVal.value === ''){
//         return;
//     }
//     console.log(typeof currentScore);
//     
//     storeHighScores();
//     viewHighScore();
//     console.log(currentScore)
//     console.log(highScores)

// }

// //view high score
// function viewHighScore() {
//     scoreContainer.setAttribute('style' , 'display : none')
//     startBtnEl.setAttribute('style' , 'display : none')
//     questContainer.setAttribute('style' , 'display : none')
//     var storedScores = JSON.parse(localStorage.getItem('score'));
//     if (storedScores !== null) {
//         highScores = score;
//     }
//     renderScore();
// };


// function renderScore(){
//     for( var i = 0; i < highScores.length; i++){
//         var highScores = highScores[i];
//     var li = document.createElement('li')
//     li.textContent = highScores;

//     }

// }
init();