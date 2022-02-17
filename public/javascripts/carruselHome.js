
const containImg = document.getElementById("containImg")

const carrusel__img = document.querySelectorAll(".carrusel__img")

const containPuntos = document.querySelector(".containPuntos")

const carrusel__nextImg = document.querySelector(".carrusel__nextImg")

// calcula el tamaño de cada imagen para que se ajuste a la pantalla
carrusel__img.forEach((img, i) => {

    const totalImg = carrusel__img.length

    img.style.width = `calc(100% / ${totalImg})` // le da a cada imagen el tamaño para ajustarse cuando va incrementado las imagenes

    containImg.style.width = `${totalImg}00%`



})


// ponen la cantidad de puntos para cambiar de imagenes segun cuantas imagenes alla 
const totalImgParaLista = carrusel__img.length
const listaDeBanner = `<li class="containPuntos__punto"></li>`;
containPuntos.innerHTML += listaDeBanner.repeat(totalImgParaLista - 1)

// atrapamos ".containPuntos__punto" despues de poner los li con el innerHTML porque si declaramos la variable antes no toma los li que ponemos despues
let puntos = document.querySelectorAll(".containPuntos__punto")


// PARA QUE EL CARRUSEL SEA AUTOMATICO
/* setInterval(() => {
    moverBanner()
}, 1000); */

/* const moverBanner = () =>{
    for (let index = 0; index < carrusel__img.length; index++) {
        containImg.style.transform = `translateX(${-index}%)`
    }
} */

window.addEventListener("load", () => {


    puntos.forEach((punto, i) => {
        punto.addEventListener("click", () => {

            let posicion = i
            // posicion es 0 trasnformX es 0
            // posicion es 1 trasnformX es -50%
            // operacion = posicion * -50


            const totalImg = carrusel__img.length

            const totalMoving = 100 / totalImg

            let operacion = posicion * -totalMoving

            //   let operacion = posicion * -50

            containImg.style.transform = `translateX(${operacion}%)`

            puntos.forEach(punt => {
                punt.classList.remove('active')
            })
            punto.classList.add("active")

        })

    });

    //cuando presione el bonton la imagen se desliza de a uno
    for(let i = 0; i < carrusel__img.length; i++){

        carrusel__nextImg.addEventListener("click", (e) => {
            e.preventDefault()

            let posicionImg = i;
            const totalImg = carrusel__img.length 

            console.log(carrusel__img.style.width)

            let b = parseInt(containImg.style.width)
            console.log(b);

            const totalMoving =  (b / totalImg)

            console.log(totalMoving);

           /*  let total = posicionImg * totalMoving; */

            containImg.style.transform = `translateX(${-totalMoving}%)`

            console.log(containImg.style.width)
        })
        
    }

})
