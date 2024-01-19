import ChangingBackgrounds from "./Components/ChangingBackgrounds.jsx";
import TopMenuBar from "./Components/TopMenuBar.jsx"
import logo from "./Resources/LOGO-MONTECARLO.svg"
import image1 from "./Resources/ganado-patagonia.jpg"
import image2 from "./Resources/vaca-patagonia.jpg"
import './App.css'

const images = [
  image1, image2
]

function App() {
  return (
    <div>
      <div className="home">
        <TopMenuBar logo={logo}/>
        <ChangingBackgrounds images={images}/>
        {/* AnimatedTexts */}
      </div>

        <div className="placeholder">DESCRIPCIÓN SOBRE LA EMPRESA, MISIÓN, FILOSOFÍA, ETC</div>

        <div className="placeholder">LO QUE GARANTIZA/OFRECE LA EMPRESA</div>

        <div className="placeholder">SECCIÓN SOBRE PRODUCTOS Y CALIDAD</div>

        <div className="placeholder">SECCIÓN SOBRE LOGROS Y CRECIMIENTO</div>

        <div className="placeholder">SECCIÓN DE PRENSA EN CASO DE HABER ARTÍCULOS</div>

        <div className="placeholder">SECCIÓN DE MAPAS Y MERCADOS</div>

        <div className="placeholder">PERSONAS DE LA EMPRESA, CONTACTO Y REDES</div>

    </div>
  );
}

export default App;
