var finalScore = 0;
var secondsLeft = 50;
var counter = 0;
var viewScoreBtnEl = document.querySelector("#view-score");
var timeEl = document.querySelector("#time-el");
var startBtnEl = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question");
var optA = document.querySelector("#a");
var optB = document.querySelector("#b");
var optC = document.querySelector("#c");
var optD = document.querySelector("#d");
var answerEl = document.querySelector("#answer");
var allDone = document.querySelector("#all-done");
var finalScoreEl = document.querySelector("#score");
var questContainer = document.querySelector("#question-container");
var scoreContainer = document.querySelector("#score-container");
var nameVal = document.querySelector("#name");
var highScoreEl = document.querySelector("#high-score");
var highScoreListEl = document.querySelector("#high-score-list");
var scoreRecords = [];
var questions = [
  {
    question: "Why are flamingos pink?",
    optionA: "A. There is no specific reason, they are just born that way.",
    optionB: "B. Because of their shrimp-based diet",
    optionC: "C. Because of a gene mutation",
    optionD: "D. To stand out more in the wild ",
    correctAns: "B",
  },
  {
    question: "How many steps should you walk in a day?",
    optionA: "A. 500",
    optionB: "B. 6,000",
    optionC: "C. 10,000",
    optionD: "D. 8,000",
    correctAns: "C",
  },
  {
    question: "How much blood does a body of a grown-up approximately contain?",
    optionA: "A. 7 litres",
    optionB: "B. 5 litres",
    optionC: "C. 3 litres",
    optionD: "D. 9 litres",
    correctAns: "B",
  },
  {
    question:
      "Which one is the only planet that orbits the sun in a clockwise direction?",
    optionA: "A. Earth",
    optionB: "B. Neptune",
    optionC: "C. Venus",
    optionD: "D. Uranus",
    correctAns: "C",
  },
  {
    question: "The apes that are the closest relatives to human beings are...",
    optionA: "A. Orangutan and chimpanzee",
    optionB: "B. Gorilla and orangutan",
    optionC: "C. Gorilla and chimpanzee",
    optionD: "D. Bonobo and chimpanzee",
    correctAns: "D",
  },
];
function startQuiz() {
  startBtnEl.addEventListener("click", timer);
  displayQuestion();
}

startQuiz();

function timer() {
  var timerInterval = setInterval(function () {
    startBtnEl.setAttribute("style", "display : none");
    questContainer.setAttribute("style", "display: block");
    if (secondsLeft > 0) {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft + " second(s) left.";
    } else {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
  timeEl.textContent = "";
  allDone.textContent = "ALL DONE!!!";
  questContainer.setAttribute("style", "display: none");
  scoreContainer.setAttribute("style", "display: block");
  finalScoreEl.textContent = "Your final score is: " + finalScore;
}
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
}
function getValue(selectedBtn) {
  optA.disabled = true;
  optB.disabled = true;
  optC.disabled = true;
  optD.disabled = true;
  var selectedOptVal = selectedBtn;
  var correctAnsVal = questions[counter].correctAns;
  if (selectedOptVal === correctAnsVal) {
    finalScore += 20;
    answerEl.textContent = "Correct!";
  } else {
    answerEl.textContent = "Incorrect!";
    secondsLeft = secondsLeft - 15;
  }
  if (counter < questions.length - 1) {
    setTimeout(clearComment, 2000);
    counter++;
    setTimeout(displayQuestion, 2000);
  } else {
    secondsLeft = 0;
    renderScores();
  }
}
function clearComment() {
  answerEl.textContent = "";
}

function submitRecord(event) {
  event.preventDefault();
  var currentScore = [nameVal.value, finalScore];
  if (nameVal.value === "") {
    alert("Please enter your name.");
    return;
  }
  scoreRecords.push(currentScore);
  storeScores();
  viewHighScores();
}
function storeScores() {
  localStorage.setItem("score", JSON.stringify(scoreRecords));
}
function init() {
  var storedScores = JSON.parse(localStorage.getItem("score"));
  if (storedScores !== null) {
    scoreRecords = storedScores;
    console.log(scoreRecords);
    renderScores();
  }
}
function renderScores() {
  var sortedScores = scoreRecords.sort((a, b) => b[1] - a[1]);
  scoreContainer.setAttribute("style", "display : none");
  questContainer.setAttribute("style", "display : none");
  for (var i = 0; i < sortedScores.length; i++) {
    var score = sortedScores[i];
    var li = document.createElement("li");
    li.textContent = score[0] + "  ---  " + score[1];
    console.log(score);
    highScoreEl.append(li);
  }
}
function viewHighScores() {
  highScoreListEl.setAttribute("style", "display : block");
  questContainer.setAttribute("style", "display : none");
  startBtnEl.setAttribute("style", "display : none");
  highScoreEl.setAttribute("style", "display: block");
  highScoreEl.innerHTML = "";
  renderScores();
}
init();
