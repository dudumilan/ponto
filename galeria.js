

const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
];

const galeriaCompleta = document.getElementById("galeriaCompleta");
const contadorFotos = document.getElementById("contadorFotos");

if(galeriaCompleta){

    fotos.forEach((arquivo, index) => {

        const img = document.createElement("img");

        img.src = arquivo;
        img.alt = `Foto ${index + 1}`;
        img.loading = "lazy";

        galeriaCompleta.appendChild(img);

    });

}

if(contadorFotos){
    contadorFotos.textContent = `${fotos.length} fotos guardadas com carinho, e sempre cabe mais uma ❤️`;
}
