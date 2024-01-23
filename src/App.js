import ChangingBackgrounds from "./Components/ChangingBackgrounds.jsx";
import ChangingText from "./Components/ChangingText.jsx"
import NavBar from "./Components/NavBar.jsx"
import logo from "./Resources/Images/mainLogo2.png"
import image from "./Resources/Images/ovinos-patagonia-6.jpg"

const images = [
  image
]

function App({language}) {
  return (
    <div>

      <NavBar text= {language.navText} logo={logo}/>

      <div className="home">

        <ChangingBackgrounds images={images}/>
        <ChangingText text={language.homeText}/>

      </div>

        <div className="placeholder">SECCIÓN CON LO QUE GARANTIZA/OFRECE LA EMPRESA</div>

        <div className="placeholder">SECCIÓN SOBRE PRODUCTOS Y CALIDAD</div>

        <div className="placeholder">SECCIÓN SOBRE LOGROS Y CRECIMIENTO</div>

        <div className="placeholder">SECCIÓN DE PRENSA EN CASO DE HABER ARTÍCULOS</div>

        <div className="placeholder">SECCIÓN DE MAPAS Y MERCADOS</div>

        <div className="placeholder">SECCIÓN DE PERSONAS DE LA EMPRESA, CONTACTO Y REDES</div>

    </div>
  );
}

export default App;
