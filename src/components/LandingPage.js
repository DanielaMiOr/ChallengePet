import  "./CSS/LandingPage.css"

function LandingPage() {


    return (
        <div className="ContainerFirst">
           
            <section className="sectionLandingPage">
            <img
                className="imgLogo2"
                src={require("../img/logo2.png")}
                alt="imgMascotas"
                />
                <p className="infoParagraphPet">En <b>MascotaShop</b> puedes encontrar todo lo que hará deliz a tu mascota...sin tener que salir de tu casa!</p>
                <button className="btonGeneric">Instalar!</button>
                <div className="containerBtns">
                <button className="btnGoogle"></button>
                <button className="btnApp"></button>
                </div>
                <img
                className="container-img"
                src={require("../img/mascotas.png")}
                alt="imgMascotas"
                />
                <p className="subscribe">¡Suscríbete y recibe las novedades de MascotaShop! </p>
               <section className="containerInputAndBtn">
                <input
                    id="inputSend"
                    className="inputText"
                    type="text"
                    placeholder="Ingresa tu correo"
                    name="texto" />
                <button className="btonSus">Suscribirse</button>
            </section>
            </section>

        </div>
    )
}
export default LandingPage;