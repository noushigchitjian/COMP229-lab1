// Noushig Chitjian
// Lab 01
// Date : 18 Sept. 2020

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];


function setAvailableQuestions(){
    const totalQuestion = Test.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestions.push(Test[i])
    }    
}

function getNewQuestion(){
    questionNumber.innerHTML = "Question" + (questionCounter +1) + "of" + Test.length;
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);
    const optionLen = currentQuestion.options.length
   
    for (let i=0; i<optionLen; i++){
      availableOptions.push(i)  

    }
    for (let i = 0; i < optionLen; i++){
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.className = "option";
        optionContainer.appendChild(option)
    }    
    questionCounter++
}
function next(){
    if(questionCounter === Test.length){
        console.log("Test Over");
    }
    else{
        getNewQuestion();
    }
}
window.onload = function(){
    setAvailableQuestions();
    getNewQuestion();
}