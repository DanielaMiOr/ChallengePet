
import './App.css';
import LandingPage from './components/LandingPage';
import PetsShop from './components/PetsShop';
import DescargaApp from './components/DescargaApp';
import InfoPart from './components/InfoPart';
import Logo from "./img/logo.png"
import {AiOutlineMenu} from "react-icons/ai";


function App() {
  
  return (
    <div className="App">
      

       <section className="logo">
                <img className="logoImg"
                    src={Logo} />
                    <AiOutlineMenu className="menuBurger"/>
                    {/* <button className="btnMenu">Home</button>
                    <button className="btnMenu1">¿Qué somos?</button>
                    <button className="btnMenu2">Instalar</button>
                    <button className="btnMenu3"> Dinos Hola!</button>
                    <button className="btnMenu4"></button> */}
     
            </section>
      <LandingPage/>
      <PetsShop/>
      <DescargaApp/>
      <InfoPart/>

    </div>
  );
}

export default App;
