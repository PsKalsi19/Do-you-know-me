const readLine = require('readline-sync');
var userName = ''
var score = 0;
const topScorers = [{
  name: 'Ronit',
  score: 5
}, {
  name: 'Shraddha',
  score: 6
}]
// Array of question set
let questionData = [{
  question: "what is my favorite cuisine? ",
  answer: "north indian"
}, {
  question: "what is my favorite music genre? ",
  answer: "rap"
}, {
  question: "Who is my favourite Rapper? ",
  answer: "raftaar"
}, {
  question: "In which company do I work? ",
  answer: "kizora"
}, {
  question: "My favorite indoor game is? ",
  answer: "chess"
}, {
  question: "My favorite outdoor game is? ",
  answer: "football"
}, {
  question: "Do I have a Pet? ",
  answer: "no"
}]

function welcomeUser() {
  userName = readLine.question('Please enter your Name ');
  console.log(`Hello ${userName} let's see how well you know Rounak!`)
}

welcomeUser()
// Function to get the response of question
function questionRequests(question, answer) {
  const getAns = readLine.question(question);
  showOutput(getAns)
  getAns.toLowerCase() === answer ? positiveData() : negativeData()
}

questionsLoop()

function questionsLoop() {
  // looping through question requests
  for (let i = 0; i < questionData.length; i++) {
    questionRequests(questionData[i].question, questionData[i].answer);
    if (i === questionData.length - 1) {
      console.log(`Your final score is ${score}. `)
      restartOption()
    }
  }
}


// showFinalResult
// restart option
function restartOption() {
  let response = readLine.question(`Do you want to try again? press 'y' for yes 'n' for no. `);
  if (response === 'y') {
    console.clear();
    resetScore()
    questionsLoop()
  }
  else {
    console.clear();
    console.log(`Thanks for playing ${userName}.`)
    showHighScores()
    resetScore()
  }
}

function showOutput(enteredValue) {
  console.log('You entered ' + enteredValue)
}

function correct() {
  console.log('You are Right')
}

function incorrect() {
  console.log('You are Wrong')
}

function incrementScore() {
  score = score + 1
}

function showScore() {
  console.log(`Your Score is ${score}`)
}

function positiveData() {
  correct()
  incrementScore()
  showScore()
}
function negativeData() {
  incorrect()
  showScore()
}

function resetScore() {
  score = 0;
}

function showHighScores() {
  console.log(`Here are the stats of highest scores:`)
  for (let i = 0; i < topScorers.length; i++) {
    console.log(`Name ${topScorers[i].name} and score is ${topScorers[i].score}`)
  }
}
