import  "./CSS/Pets.css"
function PetsShop() {
    return (
        <div className="containerPet">
            <p className="petShop">¿Qué es MascotaShop?</p>
            <p className="pInfo"><b>MascotaShop</b> es una aplicación móvil hecha para consetir a tu mascota, porque sabemos que son parte esencial de tu familia!</p>
               <p> Te presentamos algunos beneficios. </p>
                <img
                className="imgsMascotas"
                src={require("../img/img1.png")}
                alt="imgMascotas"
                />
                 <img
                className="imgsMascotas"
                src={require("../img/img2.png")}
                alt="imgMascotas"
                /> <img
                className="imgsMascotas"
                src={require("../img/img3.png")}
                alt="imgMascotas"
                /> <img
                className="imgsMascotas"
                src={require("../img/img4.png")}
                alt="imgMascotas"
                /> <img
                className="imgsMascotas"
                src={require("../img/img5.png")}
                alt="imgMascotas"
                />
        </div>
    )
}
export default PetsShop;