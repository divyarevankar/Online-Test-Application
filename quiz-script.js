var currentQuestion = 0;
var score=0; i=0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
//const selectedAnswers = [];
var resultCont = document.getElementById('result');
var reviewCont = document.getElementById('review');

function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' +q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;

};


function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select your answer');
        return;
    }
   //selectedAnswers[i] = selectedOption.value;
    //i++;

    // saving data into json file
   // const fs = require('fs')
    //const jsonData = JSON.stringify(selectedOption)
    //fs.writeFile('review.json',jsonData,finished)
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer)
    {
        score += 10;

    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'finish';}
    //container.style.display = 'none';
    //resultCont.style.display = '';
    //for(let n=0; n<5; n++){
      //  reviewCont.textContent = questions[n];
        //reviewCont.textContent = selectedAnswers[n];
        
    //}
    //nextButton.textContent = 'submit answers';
  if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'your score is: ' + score;
        return;
  }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
