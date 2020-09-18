 const startButton=document.getElementById("started");
 const questionContainer=document.getElementById("question-container")
 startButton.addEventListener("click",startGame);

const next=document.getElementById("next")
let shuflequestions, currentquestionsindex;
const questionelement=document.getElementById("question");
const answerbtn=document.getElementById("ans-btn")
next.addEventListener("click",()=>{
    currentquestionsindex++
    selectNextQuestion()
})

 function startGame(){
     startButton.classList.add("hide");
     shuflequestions=questions.sort(()=>Math.random()-.5)
     questionContainer.classList.remove("hide")
     currentquestionsindex=0
     selectNextQuestion()
 }


 function selectNextQuestion(){
     resetstate()
showquestion(shuflequestions[currentquestionsindex])
 }

 function showquestion(question){
     questionelement.innerText=question.question
     question.answer.forEach(answer => {
         const button=document.createElement('button')
         button.innerText= answer.text
         button.classList.add("btn")
         if(answer.correct){
             button.dataset.correct=answer.correct
         }
         button.addEventListener("click",selectAnwser)
         answerbtn.appendChild(button)
     });
 }

function resetstate(){
    clearStatusClass(document.body)
    next.classList.add("hide")
     while(answerbtn.firstChild){
        answerbtn.removeChild
       (answerbtn.firstChild)
     }
}
 function selectAnwser(e){
     const selectbtn=e.target
    const correct=selectbtn.dataset.correct
       setStatusClass(document.body, correct)
 Array.from(answerbtn.children).forEach(button=>{
  setStatusClass(button,button.dataset.correct)

 })
 if(shuflequestions.length > currentquestionsindex + 1){
     next.classList.remove('hide')
 }else{
     startButton.innerText="RESTART"
     startButton.classList.remove("hide")
     questionContainer.classList.add("hide")
 }

 }

  

  function setStatusClass(element,correct){
      clearStatusClass(element)
      if(correct){
          element.classList.add("correct")
     }
      else{element.classList.add("wrong")}




 }
function clearStatusClass(element,correct){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

 const questions=[
      {question:"who is Nigeria",
     answer:[
         {text:'2', correct:true},
         {text:'22', correct:false}
     ]},
     
     {
         question:"the capital of oyo state is ?",
        answer:[
           { text:'ibadan', correct:true},
            { text:'lagos', correct:false},
            {text:'abuja', correct:false},
            {text:'osogbo', correct:false}
         ]
     },

    {question:"the state of america is",
    answer:[
        {text:'usa', correct:true},
        {text:'bbc', correct:false}
    ]},
 ]
