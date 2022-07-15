
import './App.css';
import LandingPage from './components/LandingPage';
import PetsShop from './components/PetsShop';
import DescargaApp from './components/DescargaApp';
import InfoPart from './components/InfoPart';
import Logo from "./img/logo.png"
import {AiOutlineMenu,AiFillFacebook,AiFillInstagram} from "react-icons/ai";


function App() {
  
  return (
    <div className="App">
      

       <section className="logo">
                <img className="logoImg"
                    src={Logo} />
                    <AiOutlineMenu className="menuBurger"/>
                    <div className= "btnDesktop">
                    <button className="btnMenuHome">Home</button>
                    <button className="btnMenu">¿Qué somos?</button>
                    <button className="btnMenuHome">Instalar</button>
                    <button className="btnMenu"> Dinos Hola!</button>
                    </div>
                   <div className="containerIconsRed">
                    <AiFillFacebook className="iconRed"/>
                    <AiFillInstagram className="iconRed"/>
                    </div>
                    
     
            </section>
      <LandingPage/>
      <PetsShop/>
      <DescargaApp/>
      <InfoPart/>

    </div>
  );
}

export default App;
