import React from "react";
import Recalls from "./Recalls";
import { ImagesActions, ImagesIcons } from "../assets/Assets";

/*
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const recallRAndom = shuffle(recall);
console.log(recall);*/

function shuffle() { 
  return Math.random();
}
const recallRAndom = Recalls().sort(shuffle)
console.log(recallRAndom);


export default function Recall({
  recall,
  setRecall,
  showQuestion,
  setShowQuestion,
  showAnswer,
  setShowAnswer}){
  
  //TODO: componentizar recalls dps
  /*const recalls = [{
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
    state: "unanswered"
  },
  {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
      state: "unanswered"
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "letra maiúscula",
    state: "unanswered"
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões",
    state: "unanswered"
  }]*/

  return(
    <div className=''>
      {recallRAndom.map((val, index) => {
        if (showQuestion === index) {
          if(showAnswer === index){
            {/*RESP*/}
            return <Answer
            key={index}
            index={index}
            recall={recall}
            setRecall={setRecall}
            showQuestion={showQuestion}
            setShowQuestion={setShowQuestion}
            />
          } else {
            {/*PERGUNTA*/}
            return <QuestionInfo
            key={index}
            index={index}
            recall={recall}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
            />
          }
        }
        else return <Question
        key={index}
        index={index}
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
        recall={recall}
        setRecall={setRecall}/>
      })}
    </div>
  )
}
function Question({index, showQuestion, setShowQuestion, recall, setRecall}){
  if (recall[index].state === "answered"){
    return(
      <div className="question" key={index}>
        <p>Pergunta {index + 1}</p>
        <img src={recall[index].result} alt="QUANDO ISSO APARECE?" />
      </div>
    )
  }
  if (recall[index].state === "unanswered"){
    return(
      <div className="question" key={index}>
        <p>Pergunta {index + 1}</p>
        <ion-icon name="play-outline" onClick={() => setShowQuestion(index)}></ion-icon>
      </div>
    )
  }
  /*switch (recall[index].state) {
    case "unanswered":
      return(
        <div className="question" key={index}>
          <p>Pergunta {index + 1}</p>
          <img src={recall[index].result}/>
        </div>
      )
      break;
    case "answered":
    return(
      <div className="question" key={index}>
        <p>Pergunta {index + 1}</p>
        <ion-icon name="play-outline" onClick={() => setShowQuestion(index)}></ion-icon>
      </div>
    )
      break;

    default:
      console.log("Erro, estado desconhecido");
      break;
  }*/
}

function QuestionInfo({index, recall, showAnswer, setShowAnswer}){
  return(
    <div className="question-info" key={index}>
      <p>
        {recall[index].question}
      </p>
      <div className="ghost-cont"></div>
      <div className="flip-container">
        <div className="flip" onClick={() => setShowAnswer(index)}>
          <img src={ImagesActions.Flip} alt="icone" />
        </div>
      </div>
    </div>
  )
}

function Answer({index, recall, setRecall, showQuestion, setShowQuestion}){
  
  function memoryState(state) {
    switch (state) {
      case 'danger':
        setShowQuestion(false);
        recall[index].state = "answered";
        recall[index].result = ImagesIcons.Danger;
        setRecall(recall);        
        break;

      case 'attention':
        setShowQuestion(false);
        recall[index].state = "answered";
        recall[index].result = ImagesIcons.Attention;
        setRecall(recall);
        break;

      case 'success':
        setShowQuestion(false);
        recall[index].state = "answered";
        recall[index].result = ImagesIcons.Success;
        setRecall(recall);
        break;

      default:
        break;
    }
}

return (
  <div className="question-info" key={index}>
    <p> {recallRAndom[index].answer} </p>
    <div className="state-container">
      <div className="state danger" onClick={() => memoryState("danger")}>
        <p> Não lembrei </p>
      </div>
      <div className="state attention" onClick={() => memoryState("attention")}>
        <p> Quase não lembrei </p>
      </div>
      <div className="state success" onClick={() => memoryState("success")}>
        <p> Zap! </p>
      </div>
    </div>
  </div>

)

  /*return(
    <div className="answer" key={index}>
      <p>Resposta {index + 1}</p>
      <p>{recall[index].answer}</p>
      <div className="ghost-cont"></div>
      <div className="flip-container">
        <div className="flip" onClick={() => setShowAnswer(index)}>
          <img src={ImagesActions.Flip} alt="icone" />
        </div>
      </div>
    </div>
  )*/
}
