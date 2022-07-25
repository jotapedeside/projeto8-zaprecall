
import React from "react";
import { ImagesLogos } from "../assets/Assets"
import Recall from "./Recall"
import {recalls} from "./Recalls";
import Rodape from "./Rodape";
const recallsRandom = recalls.sort((a,b) => Math.random()-0.5);

export default function RecallPage(){
  const [showQuestion, setShowQuestion] = React.useState("unanswered");
  const [showAnswer, setShowAnswer] = React.useState("not answered");
  const [recall, setRecall] = React.useState(recallsRandom);
  const [qtdeRespondidas, setQtdeRespondidas] = React.useState(0)
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  return(
    <div className="recall-page">
      <div className="recall-page-logo">
        <img src={ImagesLogos.Logo}/>
        <h1>ZapRecall</h1>
      </div>
      <Recall
      showQuestion={showQuestion}
      setShowQuestion={setShowQuestion}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      recall={recall}
      setRecall={setRecall}
      qtdeRespondidas={qtdeRespondidas}
      setQtdeRespondidas={setQtdeRespondidas}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}/>
      <Rodape
      qtdeRespondidas={qtdeRespondidas}
      recall={recall}
      currentIndex={currentIndex}
      />
    </div>
  )
}