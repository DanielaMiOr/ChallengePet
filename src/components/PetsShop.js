import  "./CSS/Pets.css"
function PetsShop() {
    return (
        <div className="containerPet">
            <p className="petShop">¿Qué es MascotaShop?</p>
            <p className="pInfo"><b>MascotaShop</b> es una aplicación móvil hecha para consetir a tu mascota, porque sabemos que son parte esencial de tu familia!</p>
               <p className="pPresentation"> Te presentamos algunos beneficios. </p>
                <img
                className="imgsPets"
                id="img1"
                src={require("../img/img1.png")}
                alt="imgMascotas"
                />
                 <img
                 id="img2"
                className="imgsPets"
                src={require("../img/img2.png")}
                alt="imgMascotas"
                /> 
                <img
                id="img3"
                className="imgsPets"
                src={require("../img/img3.png")}
                alt="imgMascotas"
                /> 
                <img
                id="img4"
                className="imgsPets"
                src={require("../img/img4.png")}
                alt="imgMascotas"
                /> 
                <img
                id="img5"
                className="imgsPets"
                src={require("../img/img5.png")}
                alt="imgMascotas"
                />
        </div>
    )
}
export default PetsShop;