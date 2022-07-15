import "./CSS/DescargasApp.css"


function DescargaApp() {
    return (
        <div className="containerPhone">
            <img
                className="phone"
                src={require("../img/phones.png")}
                alt="imgMascotas"
            />
            <div className="containerBtn1">
                <button className="btnGoogleC"></button>
                <button className="btnAppC"></button>
            </div>
            <section className="boxParagraph">
            <p className="pPhone">Disfruta de todos los beneficios que solo MascotaShop te brinda para tu comodidad y la de tu mascota, todo en la palma de tu mano.</p>

            <p className="pPhone1">Instála y entérate por tí mismo de todas sus funciones.</p>
            </section>
            <img
                className="phoneFiguras"
                src={require("../img/app.png")}
                alt="imgMascotas"
            />
        </div>
    )
}
export default DescargaApp;