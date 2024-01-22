import ChangingBackgrounds from "./Components/ChangingBackgrounds.jsx";
import NavBar from "./Components/NavBar.jsx"
import ChangingText from "./Components/ChangingText.jsx"
import logo from "./Resources/LOGO-MONTECARLO.svg"
import image1 from "./Resources/ganado-patagonia.jpg"
import image2 from "./Resources/vaca-patagonia.jpg"
import './App.css'

const images = [
  
]

function App() {
  return (
    <div>

        <NavBar logo={logo}/>

      <div className="home">
        <ChangingBackgrounds images={images}/>
        <ChangingText/>
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
