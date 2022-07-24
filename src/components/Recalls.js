const recalls = [{
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
}]
export default function Recalls(){
  return(
    recalls
  )
}