
import {recalls} from "./Recalls"

const answersArrOrder = [];

export default function Rodape({
  qtdeRespondidas,
  recall,
  currentIndex,
  txtResult,
  txtFlavor
}){
  switch (qtdeRespondidas) {
    case 0:
      return(
        <footer>
          <RodapeCounter qtdeRespondidas={qtdeRespondidas}/>
        </footer>
      )
    case recalls.length:
        const searchObj = recall.find((obj) => obj.linethroughcolor === "state-danger");
        if (searchObj){
          txtResult = "😢 Putz...";
          txtFlavor = "Ainda falta alguns... Mas não desanime";
        } else {
          txtResult = "🥳 Parabéns!";
          txtFlavor = "Você não esqueceu de nenhum flashcard!";
        }
        return (
          <footer>
            <Resultado txtResult={txtResult} txtFlavor={txtFlavor} />
            <RodapeCounter qtdeRespondidas={qtdeRespondidas}/>
            <RodapeIconSequence
            qtdeRespondidas={qtdeRespondidas}
            recall={recall}
            currentIndex={currentIndex}
            />
          </footer>
        )
    default:
      return (
        <footer>
          <RodapeCounter qtdeRespondidas={qtdeRespondidas}/>
          <RodapeIconSequence
          recall={recall}
          currentIndex={currentIndex}
          />
        </footer>
      )
    }
  }

function RodapeCounter({qtdeRespondidas}){
  console.log(qtdeRespondidas);
  return (
    <p> {qtdeRespondidas}/{recalls.length} CONCLUÍDOS </p>
  )
}

function PreencherArr(currentIndex) {
  let aux;
  for (let ii = 0; ii < answersArrOrder.length; ii++) {
    const item = answersArrOrder[ii];
    if (currentIndex === item) {
      aux = true;
    }
  }
  if (!aux) {
    answersArrOrder.push(currentIndex)
  }
}

function RodapeIconSequence({
  recall,
  currentIndex
}) {
  PreencherArr(currentIndex);
  return (
    <div className="icon-looseness">
      {answersArrOrder.map((actualPos, index) => {
        return <img src={recall[actualPos].result} key={index} alt="" />
      })}
    </div>
  )
}

function Resultado({
  txtResult,
  txtFlavor
}) {
  return (
    <div className="rodape-resultado">
      <h1>{txtResult}</h1>
      <p>{txtFlavor}</p>
    </div>
  )
}