
import React from "react";
import { ImagesLogos } from "../assets/Assets"
import Recall from "./Recall"
import Recalls from "./Recalls";

export default function RecallPage(){
  const [showQuestion, setShowQuestion] = React.useState("unanswered");
  const [showAnswer, setShowAnswer] = React.useState("not answered");
  const [recall, setRecall] = React.useState(Recalls());
  //const [index, setIndex] = React.useState(0);
  
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
      /*setCount={setCount}
      count={count}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}*//>
    </div>
  )
}