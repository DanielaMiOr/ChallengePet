import  "./CSS/LandingPage.css"

function LandingPage() {


    return (
        <div className="ContenedorPrincipal">
           
            <section className="sectionLandingPage">
            <img
                className="imgLogo2"
                src={require("../img/logo2.png")}
                alt="imgMascotas"
                />
                <p>En <b>MascotaShop</b> puedes encontrar todo lo que hará deliz a tu mascota...sin tener que salir de tu casa!</p>
                <button className="btonGenerico">Instalar!</button>
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
                <input
                    className="inputText"
                    type="text"
                    placeholder="Ingresa tu correo"
                    name="texto" />
                <button className="btonSus">Suscribirse</button>
            </section>

        </div>
    )
}
export default LandingPage;