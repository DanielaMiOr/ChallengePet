import  "./CSS/InfoPart.css"
import { AiOutlineMail } from "react-icons/ai";

function InfoPart(){
    return(
        <div className="boxInfo">
             <img
                className="dog"
                src={require("../img/dog.png")}
                alt="imgMascotas"
                />
             <section className="sectionMessage">
             <AiOutlineMail className="message"/>
            <p className="messageParagraph">  <b>info@MascotaShop.pet </b></p>
            </section>
            <p className="infoPage">Mensaje</p>
          
            <input
            className="inputMensaje"
            type= "text"
            name="texto"
            />
            <p className="infoPage">Nombre</p>
             <input
            className="inputs"
            type= "text"
            name="texto"
            />
            <p className="infoPage">Correo</p>

             <input
            className="inputs"
            id="inputSend"
            type= "text"
            name="texto"
            />
            <button className="enviar">Enviar <img
                className="send"
                src={require("../img/send.png")}
                alt="imgMascotas"
                /> </button>
              

        </div>
    )
}
export default InfoPart;