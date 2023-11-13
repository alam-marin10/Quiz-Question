const questions = [
    {
        question: "What is the capital city of Bangladesh?",
        answers: [
            {text:"Rangpur",correct:false},
            {text:"Dhaka",correct:true},
            {text:"Khulna",correct:false},
            {text:"Rajshahi",correct:false},

        ]
    },
    {
        question: "What is the largest capital in the world?",
        answers: [
            {text:"Dhaka",correct:false},
            {text:"Beijing",correct:true},
            {text:"Paris",correct:false},
            {text:"Moscow",correct:false},

        ]
    },
    {
        question: "Which the Largest Animal in the world?",
        answers: [
            {text:"Shark",correct:false},
            {text:"Blus Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
    {
        question: "Who wrote Titanic movie story?",
        answers: [
            {text:"James Cameron",correct:true},
            {text:"Jon Landau",correct:false},
            {text:"Rae Sanchini",correct:false},
            {text:"Jonathan Hyde",correct:false},

        ]
    },
    {
        question: "Which country has largest mangrove forest in the world?",
        answers: [
            {text:"India",correct:false},
            {text:"Brazil",correct:false},
            {text:"Bangladesh",correct:true},
            {text:"Africa",correct:false},

        ]   
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text:"Monaco",correct:false},
            {text:"Vatican City",correct:true},
            {text:"Nauru",correct:false},
            {text:"Croatia",correct:false},

        ]
    },
    {
        question: "What is the first movie in Bangladesh?",
        answers: [
            {text:"Smritituku Thak",correct:false},
            {text:"Meherbaan",correct:false},
            {text:"Shukh Dukhkho",correct:false},
            {text:"Mukh O Mukhosh",correct:true},

        ]
    },
    {
        question: "Which is the smallest beach in the world?",
        answers: [
            {text:"Cox's Bazar",correct:false},
            {text:"Playa de Gulpiyuri",correct:true},
            {text:"Nissi Beach",correct:false},
            {text:"Navagio",correct:false},

        ]
    },
    {
        question: "What is smallest animal in the world?",
        answers: [
            {text:"primate",correct:false},
            {text:"Etruscan Shrew",correct:true},
            {text:"Mouse Lemur",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
    {
        question: "Which is mosque city?",
        answers: [
            {text:"Dhaka",correct:false},
            {text:"Rajshahi",correct:false},
            {text:"Bogura",correct:false},
            {text:"Bagerhat",correct:true},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;


function startQuiz(){
    currentQuestionIndex =0; 
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.question;

   
    currentQuestion.answers.forEach(answer => {
      const button =document.createElement("button");
      button.innerHTML =answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;

      }
      button.addEventListener("click", selectAnswer);

    }); 

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
} 

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
     if(button.dataset.correct ==="true"){
        button.classList.add("correct");
     }
     button.disabled =true;
    });
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`Your Scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display ="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();