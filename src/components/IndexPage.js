import { ImagesLogos } from "../assets/Assets"

export default function IndexPage({setInitialPageOn}) {
  //const MainLogo = ImagesLogos.Logo;
  return(
    
    <div className="index-page">
      <div className="index-page-logo">
        <img src={ImagesLogos.Logo}/>
        <h1>ZapRecall</h1>
      </div>
      <div>
        <button onClick={() => setInitialPageOn(false)}>
          Iniciar Recall!
        </button>
      </div>
    </div>
      
    
  )
}