import { ImagesLogos } from "../assets/Assets"

export default function IndexPage() {
  //const MainLogo = ImagesLogos.Logo;
  return(
    
    <div className="index-page"> 
      <div className="index-page-logo">
        <img src={ImagesLogos.Logo}/>
        <h1>ZapRecall</h1>
      </div>
      <div>
        <button>
          Iniciar Recall!
        </button>
      </div>
    </div>
      
    
  )
}