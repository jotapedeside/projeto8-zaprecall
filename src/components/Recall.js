import React from "react";
import Recalls,{recalls} from "./Recalls";
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
const recallRandom = shuffle(recall);
console.log(recall);*/

export default function Recall({
  recall,
  setRecall,
  showQuestion,
  setShowQuestion,
  showAnswer,
  setShowAnswer,
  setQtdeRespondidas,
  qtdeRespondidas,
  currentIndex,
  setCurrentIndex}){
  
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
    <div className='men'>
      {recall.map((val, index) => {
        if (showQuestion === index) {
          if(showAnswer === index){
            {/*RESP*/}
            return <Answer
            key={index}
            index={index}
            recall={recall}
            setRecall={setRecall}
            setShowQuestion={setShowQuestion}
            qtdeRespondidas={qtdeRespondidas}
            setQtdeRespondidas={setQtdeRespondidas}
            setCurrentIndex={setCurrentIndex}
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
        setRecall={setRecall}
        />
      })}
    </div>
  )
}
function Question({index, setShowQuestion, recall}){
  if (recall[index].state === "answered"){
    return(
      <div className="question" key={index}>
        <p className={recall[index].linethroughcolor}>Pergunta {index + 1}</p>
        <img src={recall[index].result} alt="" />
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

function QuestionInfo({index, recall, setShowAnswer}){
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

function Answer({index, recall, setRecall, setShowQuestion, qtdeRespondidas, setQtdeRespondidas, setCurrentIndex}){
  
  function memoryState(state) {
    setCurrentIndex(index)
    switch (state) {
      case 'danger':

        setQtdeRespondidas(qtdeRespondidas + 1);
        recall[index].result = ImagesIcons.Danger;
        recall[index].state = "answered";
        recall[index].linethroughcolor = 'state-danger';
        setRecall(recall);
        setShowQuestion(false);     
        break;

      case 'attention':
        setQtdeRespondidas(qtdeRespondidas + 1);
        recall[index].result = ImagesIcons.Attention;
        recall[index].state = "answered";
        recall[index].linethroughcolor = 'state-attention';
        setRecall(recall);
        setShowQuestion(false);
        break;

      case 'success':
        setQtdeRespondidas(qtdeRespondidas + 1);
        recall[index].result = ImagesIcons.Success;
        recall[index].state = "answered";
        recall[index].linethroughcolor = 'state-success';
        setRecall(recall);
        setShowQuestion(false);
        break;

      default:
        break;
    }
}

return (
  <div className="question-info" key={index}>
    <p> {recall[index].answer} </p>
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
